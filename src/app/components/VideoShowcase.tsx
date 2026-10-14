import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm mb-4 border border-blue-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            See Technology in Action
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Experience the Future of Hiring
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how our AI-powered platform transforms the recruitment process
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main video */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <video
              autoPlay={isPlaying}
              loop
              muted
              playsInline
              className="w-full h-auto"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-business-woman-doing-a-presentation-to-colleagues-4897-large.mp4" type="video/mp4" />
            </video>
            
            {/* Play/Pause overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <motion.div
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-blue-600 ml-1" />
              </motion.div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              className="absolute top-6 left-6 bg-slate-800/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-gray-400">Time Saved</div>
              <div className="text-2xl text-blue-400">75%</div>
            </motion.div>

            <motion.div
              className="absolute top-6 right-6 bg-slate-800/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-gray-400">Match Accuracy</div>
              <div className="text-2xl text-green-400">95%</div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 bg-slate-800/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-gray-400">Active Candidates</div>
              <div className="text-2xl text-purple-400">50K+</div>
            </motion.div>
          </motion.div>

          {/* Side videos grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { url: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-an-office-4119-large.mp4', title: 'Remote Work' },
              { url: 'https://assets.mixkit.co/videos/preview/mixkit-colleagues-working-together-in-an-office-4900-large.mp4', title: 'Team Collaboration' },
              { url: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-talking-in-a-modern-office-4892-large.mp4', title: 'Strategic Planning' }
            ].map((video, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <video
                  loop
                  muted
                  playsInline
                  className="w-full h-48 object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={video.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <p className="text-white">{video.title}</p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <Play className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}