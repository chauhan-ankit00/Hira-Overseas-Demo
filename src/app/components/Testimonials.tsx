import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { supabase } from '../../lib/supabase';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface Testimonial {
  id: string;
  name: string;
  profession: string;
  description: string;
  photo_url: string | null;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadTestimonials = async () => {
      try {
        const { data, error: queryError } = await supabase
          .from('testimonials')
          .select('id, name, profession, description, photo_url')
          .order('created_at', { ascending: false });

        if (!isMounted) return;

        if (queryError) {
          setError(queryError.message);
        } else {
          setTestimonials(data);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : String(requestError),
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void loadTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!carouselApi || testimonials.length < 2 || isCarouselPaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [carouselApi, testimonials.length, isCarouselPaused]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm mb-4 border border-blue-500/30">
            TESTIMONIAL
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            What Our Clients Say
          </h2>
          
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-400" role="status">
            Loading testimonials...
          </p>
        ) : error ? (
          <p className="text-center text-red-300" role="alert">
            Testimonials could not be loaded: {error}
          </p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-400">
            No testimonials are available yet.
          </p>
        ) : (
          <Carousel
            setApi={setCarouselApi}
            opts={{ align: 'start', loop: true }}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onFocusCapture={() => setIsCarouselPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsCarouselPaused(false);
              }
            }}
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="h-full py-2"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="h-full border-gray-700 bg-slate-800 p-6 transition-shadow hover:shadow-lg">
                      <p className="mb-6 italic text-gray-300">
                        “{testimonial.description}”
                      </p>

                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                          {testimonial.photo_url && (
                            <img
                              src={testimonial.photo_url}
                              alt=""
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          )}
                        </div>
                        <div>
                          <div className="text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">
                            {testimonial.profession}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {testimonials.length > 1 && (
              <>
                <CarouselPrevious className="left-2 border-gray-600 bg-slate-800 text-white hover:bg-slate-700" />
                <CarouselNext className="right-2 border-gray-600 bg-slate-800 text-white hover:bg-slate-700" />
              </>
            )}
          </Carousel>
        )}
      </div>
    </section>
  );
}