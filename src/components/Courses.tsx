import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Bachelor of Education (B.Ed)",
      description: "Professional course to prepare graduates for teaching careers in schools",
      duration: "2 Years",
      students: "80+",
      features: ["Practical Training", "Teaching Internships", "Curriculum Design", "Workshops"]
    },
    {
      title: "Bachelor of Physical Education (B.P.Ed)",
      description: "Undergraduate program focused on physical education, sports, and fitness training",
      duration: "2 Years",
      students: "60+",
      features: ["Sports Training", "Fitness Programs", "Outdoor Activities", "Workshops"]
    },
    {
      title: "Master of Education (M.Ed)",
      description: "Postgraduate program for advanced study in pedagogy, research, and educational leadership",
      duration: "2 Years",
      students: "40+",
      features: ["Research Projects", "Advanced Pedagogy", "Educational Leadership", "Workshops"]
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to help students achieve their academic goals
              and excel in competitive examinations.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-0 bg-card">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground mb-2">{course.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Course Info */}
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{course.students} Students</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;