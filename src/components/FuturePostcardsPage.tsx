import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowLeft, Sparkles, Camera, Share2, Download, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FuturePostcardsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePostcard, setActivePostcard] = useState<number | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate loading AR content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleGoBack = () => {
    navigate('/');
  };
  
  const postcards = [
    {
      id: 1,
      title: "Golden Gate Bridge 2050",
      description: "The iconic bridge surrounded by floating gardens and sustainable transport pods.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      futureImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "Times Square 2045",
      description: "Immersive holographic displays and vertical gardens transform this urban center.",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      futureImage: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "New York, NY"
    },
    {
      id: 3,
      title: "Venice Canals 2060",
      description: "Sustainable floating architecture and restored ecosystems protect this historic city.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      futureImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Venice, Italy"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      {/* Header */}
      <header className="relative z-10 px-6 py-4 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center">
          <Compass className="w-8 h-8 text-blue-400 mr-2" />
          <h1 className="text-2xl font-bold text-white">GeoGuide AI</h1>
        </div>
        <button
          onClick={handleGoBack}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </header>
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">AR Experience</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Postcards from the Future
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Experience how iconic locations might transform in the coming decades through our augmented reality postcards.
          </motion.p>
        </div>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-purple-400 animate-pulse" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(168, 85, 247, 0.3)",
                    "0 0 0 20px rgba(168, 85, 247, 0)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
            <p className="mt-6 text-white text-xl font-medium">Loading AR Experience...</p>
            <p className="text-white/60 mt-2">Preparing to transport you to the future</p>
          </div>
        ) : (
          <>
            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-12"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/30 p-3 rounded-full">
                  <Info className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">How to Experience AR Postcards</h3>
                  <ol className="text-white/70 space-y-2 list-decimal pl-5">
                    <li>Select a postcard from the collection below</li>
                    <li>Point your camera at a flat surface</li>
                    <li>Watch as the future version appears in your space</li>
                    <li>Take photos and share your experience</li>
                  </ol>
                </div>
              </div>
            </motion.div>
            
            {/* Postcards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {postcards.map((postcard, index) => (
                <motion.div
                  key={postcard.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => setActivePostcard(postcard.id)}
                >
                  <div className="relative h-48">
                    <img 
                      src={postcard.image} 
                      alt={postcard.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <div className="px-2 py-1 bg-purple-500/50 backdrop-blur-sm rounded-full text-xs font-medium text-white flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>AR Ready</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{postcard.title}</h3>
                      <p className="text-white/70 text-sm">{postcard.location}</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-white/70 mb-4 line-clamp-2">{postcard.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Tap to experience</span>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                          <Camera className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* AR Experience Modal */}
            {activePostcard && (
              <div className="fixed inset-0 z-[1100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                <div className="relative w-full max-w-4xl bg-black/60 rounded-2xl overflow-hidden border border-white/20">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white flex items-center">
                        <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                        AR Experience
                      </h2>
                      <button
                        onClick={() => setActivePostcard(null)}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    
                    <div className="aspect-video bg-black/40 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Camera className="w-16 h-16 text-white/30 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Camera Access Required</h3>
                        <p className="text-white/70 mb-4">Please allow camera access to experience AR postcards</p>
                        <button className="px-6 py-3 bg-purple-500/50 hover:bg-purple-500/70 rounded-xl text-white transition-colors">
                          Enable Camera
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {postcards.find(p => p.id === activePostcard)?.title}
                        </h3>
                        <p className="text-white/70 mb-6">
                          {postcards.find(p => p.id === activePostcard)?.description}
                        </p>
                        <div className="space-y-4">
                          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-medium flex items-center justify-center space-x-2">
                            <Camera className="w-5 h-5" />
                            <span>Take Photo</span>
                          </button>
                          <div className="flex space-x-4">
                            <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors flex items-center justify-center space-x-2">
                              <Share2 className="w-5 h-5" />
                              <span>Share</span>
                            </button>
                            <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors flex items-center justify-center space-x-2">
                              <Download className="w-5 h-5" />
                              <span>Save</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 bg-white/5 rounded-xl p-4">
                        <h3 className="text-lg font-medium text-white mb-3">How It Works</h3>
                        <ol className="text-white/70 space-y-3 list-decimal pl-5">
                          <li>Point your camera at a flat, well-lit surface</li>
                          <li>Hold steady while the AR content loads</li>
                          <li>Move around to view the postcard from different angles</li>
                          <li>Tap the screen to interact with elements</li>
                          <li>Take photos to save your experience</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}