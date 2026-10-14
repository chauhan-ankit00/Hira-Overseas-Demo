import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variable.',
  );
}

interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string;
          title: string;
          type: string | null;
          location: string;
          experience: string;
          requirements: string[] | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          type?: string | null;
          location: string;
          experience: string;
          requirements?: string[] | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          type?: string | null;
          location?: string;
          experience?: string;
          requirements?: string[] | null;
          created_at?: string;
        };
        Relationships: [];
      };
      applications: {
        Row: {
          id: string;
          name: string;
          email: string;
          role: string;
          experience_years: number;
          education: string;
          age: number;
          languages: string;
          message: string | null;
          resume_url: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          role: string;
          experience_years: number;
          education: string;
          age: number;
          languages: string;
          message?: string | null;
          resume_url: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          role?: string;
          experience_years?: number;
          education?: string;
          age?: number;
          languages?: string;
          message?: string | null;
          resume_url?: string;
        };
        Relationships: [];
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          profession: string;
          description: string;
          photo_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          profession: string;
          description: string;
          photo_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          profession?: string;
          description?: string;
          photo_url?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
