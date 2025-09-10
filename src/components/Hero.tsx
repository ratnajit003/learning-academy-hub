import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Learning Academy Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Premier Educational Institute</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Learning Academy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering minds and shaping futures through quality education at Kendrapara's leading institute
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explore Courses
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Users className="w-8 h-8 mx-auto mb-3 text-accent-light" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Students Enrolled</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Award className="w-8 h-8 mx-auto mb-3 text-accent-light" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-accent-light" />
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-white/80">Specialized Courses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;