import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Heart, Users } from "lucide-react";
import educationIcon from "@/assets/education-icon.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to providing the highest quality education"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Nurturing each student's individual potential"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships and partnerships"
    }
  ];

  const achievements = [
    "Established in 2008 with a vision of educational excellence",
    "Over 2000 successful graduates placed in top institutions",
    "Expert faculty with advanced degrees and industry experience",
    "Modern infrastructure with state-of-the-art facilities",
    "Strong placement record with 95% success rate"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Learning Academy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nurturing talent and building futures since 2008. Located in the heart of Kendrapara, 
              we are committed to providing exceptional educational experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <img 
                src={educationIcon} 
                alt="Education Excellence" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Shaping Tomorrow's Leaders
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Learning Academy, we believe education is the cornerstone of success. 
                Our institute, located near Law College in Kendrapara, has been a beacon 
                of academic excellence for over 15 years.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We offer comprehensive courses designed to prepare students for competitive 
                exams and higher education, with a focus on holistic development and 
                individual attention.
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;