import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Near Law College", "Kendrapara, 754211", "Odisha, India"],
      primary: true
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 94370 XXXXX", "+91 99370 XXXXX", "Landline: 06727-XXXXX"],
      primary: false
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@learningacademy.edu.in", "admissions@learningacademy.edu.in", "principal@learningacademy.edu.in"],
      primary: false
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 2:00 PM", "Emergency: Available 24/7"],
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your educational journey? Contact us today for admissions, 
              course information, or any queries you may have.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className={`hover:shadow-card transition-all duration-300 border-0 ${
                  info.primary ? 'bg-gradient-primary text-white' : 'bg-card'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        info.primary ? 'bg-white/20' : 'bg-primary/10'
                      }`}>
                        <info.icon className={`w-6 h-6 ${
                          info.primary ? 'text-white' : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <h4 className={`font-bold mb-2 ${
                          info.primary ? 'text-white' : 'text-foreground'
                        }`}>{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`${
                            info.primary ? 'text-white/90' : 'text-muted-foreground'
                          } ${idx > 0 ? 'mt-1' : ''}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="border-0 bg-card">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-4">Find Us</h4>
                  <div className="bg-secondary/50 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Near Law College, Kendrapara</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 bg-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Course of Interest
                    </label>
                    <Input placeholder="Which course are you interested in?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your educational goals and any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll get back to you within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;