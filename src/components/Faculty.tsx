import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Principal & Physics Faculty",
      qualification: "Ph.D. in Physics, IIT Delhi",
      experience: "20+ years",
      specialization: "Advanced Physics & JEE Preparation",
      achievements: ["Former ISRO Scientist", "Published 15+ Research Papers", "JEE Advanced Topper Mentor"]
    },
    {
      name: "Prof. Priya Sharma",
      designation: "Chemistry Head",
      qualification: "M.Sc. Chemistry, Gold Medalist",
      experience: "15+ years",
      specialization: "Organic & Inorganic Chemistry",
      achievements: ["State Board Syllabus Expert", "NEET Chemistry Specialist", "Author of Chemistry Handbook"]
    },
    {
      name: "Mr. Anand Patel",
      designation: "Mathematics Faculty",
      qualification: "M.Sc. Mathematics, NIT Rourkela", 
      experience: "12+ years",
      specialization: "Advanced Mathematics & Problem Solving",
      achievements: ["Mathematics Olympiad Trainer", "JEE Main Expert", "Problem Solving Champion"]
    },
    {
      name: "Dr. Sunita Das",
      designation: "Biology Faculty",
      qualification: "Ph.D. in Botany, Utkal University",
      experience: "18+ years", 
      specialization: "Botany, Zoology & NEET Preparation",
      achievements: ["NEET Biology Expert", "Medical Entrance Specialist", "University Lecturer"]
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Expert Faculty
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from the best. Our experienced faculty members are dedicated to 
              providing quality education and mentoring students for success.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{faculty.name}</h3>
                    <p className="text-primary font-medium mb-2">{faculty.designation}</p>
                    <p className="text-muted-foreground text-sm">{faculty.qualification}</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">Experience: </span>
                        <span className="text-muted-foreground">{faculty.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground">Specialization: </span>
                        <span className="text-muted-foreground">{faculty.specialization}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {faculty.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Academic Excellence</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Experience personalized attention and expert guidance from our qualified faculty members. 
                Your success is our commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Schedule a Meeting
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  View All Faculty
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;