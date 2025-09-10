import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Faculty", href: "#faculty" },
    { name: "Contact", href: "#contact" }
  ];

  const courses = [
    "Engineering Entrance",
    "Medical Entrance", 
    "Foundation Courses",
    "Competitive Exams",
    "Doubt Clearing Sessions"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Learning Academy</h3>
                <p className="text-sm text-primary-foreground/80">Excellence in Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering students with quality education and comprehensive preparation 
              for competitive examinations since 2008.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-light mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>Near Law College</p>
                  <p>Kendrapara, 754211, Odisha</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-light flex-shrink-0" />
                <span className="text-sm">+91 94370 XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-light flex-shrink-0" />
                <span className="text-sm">info@learningacademy.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
            <p className="text-primary-foreground/80 mb-4">
              Follow us on social media for updates and educational content.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-light/20 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-medium mb-2">Office Hours</h5>
              <p className="text-sm text-primary-foreground/80">
                Mon - Sat: 9:00 AM - 6:00 PM<br />
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Learning Academy, Kendrapara. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                Admissions Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;