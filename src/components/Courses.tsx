import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Engineering Entrance Preparation",
      description: "Comprehensive preparation for JEE Main, JEE Advanced, and state engineering entrance exams",
      duration: "2 Years",
      students: "150+",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      features: ["Expert Faculty", "Mock Tests", "Doubt Clearing Sessions", "Study Materials"]
    },
    {
      title: "Medical Entrance Preparation", 
      description: "Complete NEET preparation with biology focus and medical entrance coaching",
      duration: "2 Years",
      students: "120+",
      subjects: ["Physics", "Chemistry", "Biology"],
      features: ["Medical Experts", "NEET Mock Tests", "Biology Lab", "Current Affairs"]
    },
    {
      title: "Foundation Courses",
      description: "Strong foundation building for classes 8th, 9th, and 10th students",
      duration: "1 Year",
      students: "200+",
      subjects: ["Science", "Mathematics", "English"],
      features: ["Basic Concepts", "Interactive Learning", "Regular Assessment", "Parent Meetings"]
    },
    {
      title: "Competitive Exam Coaching",
      description: "Preparation for various competitive exams including banking, SSC, and civil services",
      duration: "1 Year",
      students: "100+",
      subjects: ["General Knowledge", "Reasoning", "English", "Mathematics"],
      features: ["Current Affairs", "Mock Interviews", "Group Discussions", "Online Tests"]
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

                  {/* Subjects */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="font-medium text-foreground">Subjects Covered:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-accent-light text-accent px-3 py-1 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
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

                  <Button variant="default" className="w-full">
                    Learn More
                  </Button>
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