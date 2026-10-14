import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { BriefcaseBusiness, MapPin, X } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase } from '../../lib/supabase';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const DESKTOP_JOBS_PER_PAGE = 6;
const MAX_RESUME_SIZE = 10 * 1024 * 1024;

type Job = {
  id: string;
  title: string;
  type: string | null;
  location: string;
  experience: string;
  requirements: string[] | null;
  created_at: string;
};

type ApplicationForm = {
  name: string;
  email: string;
  role: string;
  experienceYears: string;
  education: string;
  age: string;
  languages: string;
  message: string;
  resume: File | null;
};

const emptyForm: ApplicationForm = {
  name: '',
  email: '',
  role: '',
  experienceYears: '',
  education: '',
  age: '',
  languages: '',
  message: '',
  resume: null,
};

export function Career() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [jobsPerPage, setJobsPerPage] = useState(DESKTOP_JOBS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<ApplicationForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadJobs = async () => {
      try {
        const { data, error } = await supabase
          .from('jobs')
          .select('id, title, type, location, experience, requirements, created_at')
          .order('created_at', { ascending: false });

        if (!isMounted) return;

        if (error) {
          setLoadError(`Failed to load job openings: ${error.message}`);
        } else {
          setJobs(data);
        }
      } catch (error) {
        if (isMounted) {
          setLoadError(
            `Failed to load job openings: ${
              error instanceof Error ? error.message : String(error)
            }`,
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void loadJobs();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      setJobsPerPage(width < 768 ? 1 : width < 992 ? 2 : DESKTOP_JOBS_PER_PAGE);
      setCurrentPage(1);
    };

    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  useEffect(() => {
    if (!showModal) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowModal(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const visibleJobs = useMemo(() => {
    const start = (currentPage - 1) * jobsPerPage;
    return jobs.slice(start, start + jobsPerPage);
  }, [jobs, currentPage, jobsPerPage]);

  const openApplication = (role = '') => {
    setForm({ ...emptyForm, role });
    setSubmitError('');
    setSubmitSuccess('');
    setShowModal(true);
  };

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.currentTarget;
    if (name === 'resume' && event.currentTarget instanceof HTMLInputElement) {
      const resume = event.currentTarget.files?.[0] ?? null;
      setForm((current) => ({
        ...current,
        resume,
      }));
      return;
    }
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');

    if (!form.resume) {
      setSubmitError('Please upload your resume.');
      return;
    }
    if (form.resume.size > MAX_RESUME_SIZE) {
      setSubmitError('Your resume must be 10 MB or smaller.');
      return;
    }

    const extension = form.resume.name.split('.').pop()?.toLowerCase();
    if (!extension || !['pdf', 'doc', 'docx'].includes(extension)) {
      setSubmitError('Please upload your resume as a PDF, DOC, or DOCX file.');
      return;
    }

    setSubmitting(true);
    const filePath = `applications/${crypto.randomUUID()}.${extension}`;
    let uploadedFilePath: string | null = null;

    try {
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, form.resume, { upsert: false });

      if (uploadError) throw uploadError;
      uploadedFilePath = filePath;

      const { error: insertError } = await supabase.from('applications').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        role: form.role,
        experience_years: Number(form.experienceYears),
        education: form.education.trim(),
        age: Number(form.age),
        languages: form.languages.trim(),
        message: form.message.trim() || null,
        resume_url: filePath,
      });

      if (insertError) {
        const { error: cleanupError } = await supabase.storage
          .from('resumes')
          .remove([filePath]);
        uploadedFilePath = null;
        throw new Error(
          cleanupError
            ? `${insertError.message} Resume cleanup also failed: ${cleanupError.message}`
            : insertError.message,
        );
      }

      uploadedFilePath = null;
      setSubmitSuccess('Your application has been submitted successfully.');
      setShowModal(false);
      setForm(emptyForm);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong while submitting your application.',
      );
    } finally {
      if (uploadedFilePath) {
        const { error: cleanupError } = await supabase.storage
          .from('resumes')
          .remove([uploadedFilePath]);
        if (cleanupError) {
          setSubmitError(
            `Your application was submitted, but the uploaded resume could not be cleaned up: ${cleanupError.message}`,
          );
        }
      }
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-sm text-blue-300">
            Career Opportunities
          </div>
          <h1 className="mb-4 text-4xl font-semibold text-white md:text-5xl">
            Build Your Global Career
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-400 md:text-xl">
            Explore international opportunities across healthcare, engineering,
            and skilled trades. Submit your CV and our team will match you with
            the right role.
          </p>
        </motion.div>

        {loading && (
          <p className="py-12 text-center text-gray-400" role="status">
            Loading opportunities...
          </p>
        )}
        {loadError && (
          <p className="mb-6 rounded-lg border border-red-400/30 bg-red-950/30 p-4 text-red-200" role="alert">
            {loadError}
          </p>
        )}

        {!loading && !loadError && jobs.length === 0 && (
          <div className="py-12 text-center">
            <p className="mb-6 text-gray-400">No job listings at the moment.</p>
            <Button onClick={() => openApplication()} className="bg-blue-600 text-white hover:bg-blue-700">
              Submit Your CV Anyway
            </Button>
          </div>
        )}

        {!loading && !loadError && visibleJobs.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleJobs.map((job, index) => (
              <motion.article
                key={job.id}
                className="flex h-full flex-col rounded-2xl border border-gray-700 bg-slate-800 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="mb-4 w-fit rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
                  {job.type || 'Full Time'}
                </span>
                <h2 className="mb-3 text-xl font-semibold text-white">{job.title}</h2>
                <div className="mb-5 space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    {job.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-blue-400" />
                    {job.experience}
                  </p>
                </div>
                {job.requirements && job.requirements.length > 0 && (
                  <div className="mb-6 flex-1">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, requirementIndex) => (
                        <li
                          key={`${job.id}-${requirementIndex}`}
                          className="flex gap-2 text-sm text-gray-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Button
                  onClick={() => openApplication(job.title)}
                  className="mt-auto w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Apply Now
                </Button>
              </motion.article>
            ))}
          </div>
        )}

        {!loading && totalPages > 1 && (
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Job listing pages">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              className="border-gray-600 text-grey-300"
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? 'bg-blue-600 text-white' : 'border-gray-600 text-grey-300'}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
              className="border-gray-600 text-grey-300"
            >
              Next
            </Button>
          </nav>
        )}

        {!loading && !loadError && jobs.length > 0 && (
          <div className="mt-12 text-center">
            <p className="mb-5 text-gray-400">
              Don&apos;t see your role listed? We&apos;re always looking for great talent.
            </p>
            <Button onClick={() => openApplication()} className="bg-blue-600 text-white hover:bg-blue-700">
              Submit Your CV
            </Button>
          </div>
        )}

        {submitSuccess && (
          <p className="mt-6 text-center text-green-300" role="status">
            {submitSuccess}
          </p>
        )}

        {showModal && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/70 p-4"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget && !submitting) {
                setShowModal(false);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="application-title"
              className="relative my-8 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-700 bg-slate-900 p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                disabled={submitting}
                aria-label="Close application form"
                className="absolute right-5 top-5 rounded-md p-2 text-gray-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <h2 id="application-title" className="mb-2 pr-10 text-2xl font-semibold text-white">
                Submit Your CV
              </h2>
              {form.role && (
                <p className="mb-6 text-sm text-gray-400">
                  Applying for: <strong className="text-gray-200">{form.role}</strong>
                </p>
              )}
              {!form.role && <p className="mb-6 text-sm text-gray-400">Complete your details to apply.</p>}

              <form onSubmit={submitApplication} className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-gray-200">
                  Full Name
                  <Input name="name" value={form.name} onChange={updateField} required autoComplete="name" className="mt-2 border-gray-600 bg-slate-800 text-white" />
                </label>
                <label className="text-sm text-gray-200">
                  Email Address
                  <Input name="email" type="email" value={form.email} onChange={updateField} required autoComplete="email" className="mt-2 border-gray-600 bg-slate-800 text-white" />
                </label>
                <label className="text-sm text-gray-200">
                  Experience (Years)
                  <Input name="experienceYears" type="number" min="0" step="1" value={form.experienceYears} onChange={updateField} required className="mt-2 border-gray-600 bg-slate-800 text-white" />
                </label>
                <label className="text-sm text-gray-200">
                  Age
                  <Input name="age" type="number" min="18" value={form.age} onChange={updateField} required className="mt-2 border-gray-600 bg-slate-800 text-white" />
                </label>
                <label className="text-sm text-gray-200">
                  Education
                  <Input name="education" value={form.education} onChange={updateField} required className="mt-2 border-gray-600 bg-slate-800 text-white" />
                </label>
                <label className="text-sm text-gray-200">
                  Languages Known
                  <Input name="languages" value={form.languages} onChange={updateField} required className="mt-2 border-gray-600 bg-slate-800 text-white" />
                </label>
                <label className="text-sm text-gray-200 sm:col-span-2">
                  Job Role
                  <select
                    name="role"
                    value={form.role}
                    onChange={updateField}
                    required
                    className="mt-2 h-11 w-full rounded-md border border-gray-600 bg-slate-800 px-3 text-white"
                  >
                    <option value="" disabled>Select a role</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm text-gray-200 sm:col-span-2">
                  Message (Optional)
                  <Textarea name="message" value={form.message} onChange={updateField} rows={3} className="mt-2 border-gray-600 bg-slate-800 text-white" />
                </label>
                <label className="text-sm text-gray-200 sm:col-span-2">
                  Upload Resume (PDF, DOC, DOCX; max 10 MB)
                  <Input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={updateField}
                    required
                    className="mt-2 h-auto border-gray-600 bg-slate-800 py-2 text-white file:mr-3 file:rounded file:border-0 file:bg-blue-600 file:px-3 file:py-2 file:text-white"
                  />
                </label>

                {submitError && (
                  <p className="sm:col-span-2 text-sm text-red-300" role="alert">
                    {submitError}
                  </p>
                )}
                <div className="mt-2 flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={submitting}
                    onClick={() => setShowModal(false)}
                    className="border-gray-600 text-black"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
