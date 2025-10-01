import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Calendar, Instagram, ArrowLeft, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! The influencer will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      company: "",
      projectType: "",
      message: ""
    });
    setDate(undefined);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Floating message icons
  const messageIcons = Array.from({ length: 30 }).map((_, i) => (
    <MessageCircle
      key={i}
      className="absolute text-[#e64c7f]/20 w-6 h-6 animate-pulse-slow"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    />
  ));

  return (
    <div className="relative min-h-screen bg-[#f7f3ec] overflow-hidden">
      {/* Floating message icons */}
      {messageIcons}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#eee]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e64c7f] to-[#ff6a96] bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-6 items-center">
            <a 
              href="https://www.instagram.com/themirandagirl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#e64c7f] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="gap-2 border-[#e64c7f] text-[#e64c7f] hover:bg-[#e64c7f]/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Contact Form Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#e64c7f] to-[#ff6a96] bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's collaborate on your next project. Fill out the form below and you’ll get a reply soon.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-10 rounded-3xl shadow-2xl border border-[#e64c7f]/20 relative overflow-hidden"
          >
            {/* Decorative circle */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#e64c7f]/30 rounded-full mix-blend-multiply animate-pulse"></div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                placeholder="Your full name"
                className="bg-background focus:border-[#e64c7f] focus:ring-[#e64c7f]/40 focus:ring-2 transition"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                placeholder="your.email@example.com"
                className="bg-background focus:border-[#e64c7f] focus:ring-[#e64c7f]/40 focus:ring-2 transition"
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Your address"
                className="bg-background focus:border-[#e64c7f] focus:ring-[#e64c7f]/40 focus:ring-2 transition"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+91 12345 67890"
                  className="bg-background pl-10 focus:border-[#e64c7f] focus:ring-[#e64c7f]/40 focus:ring-2 transition"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  📞
                </span>
              </div>
            </div>

            {/* Company / Agency */}
            <div className="space-y-2">
              <Label htmlFor="company">Company / Agency</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Your company or agency name"
                className="bg-background focus:border-[#e64c7f] focus:ring-[#e64c7f]/40 focus:ring-2 transition"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type *</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => handleChange("projectType", value)}
                required
              >
                <SelectTrigger className="bg-background focus:ring-2 focus:ring-[#e64c7f]/40">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tv-ad">TV/Ad Shoot</SelectItem>
                  <SelectItem value="modeling">Modeling</SelectItem>
                  <SelectItem value="photoshoot">Photoshoot</SelectItem>
                  <SelectItem value="collaboration">Brand Collaboration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Targeted Date */}
            <div className="space-y-2">
              <Label>Targeted Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-background hover:bg-[#e64c7f]/10 transition",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                placeholder="Tell me about your project..."
                className="min-h-[120px] bg-background focus:border-[#e64c7f] focus:ring-[#e64c7f]/40 focus:ring-2 transition"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e64c7f] to-[#ff6a96] hover:scale-105 transition-transform shadow-lg text-white font-bold"
              size="lg"
            >
              Submit
            </Button>
          </form>

          {/* Direct Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:work.themirandagirl@gmail.com"
                className="text-[#e64c7f] hover:underline"
              >
                work.themirandagirl@gmail.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="https://www.instagram.com/themirandagirl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e64c7f] hover:underline"
              >
                @themirandagirl
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#eee]">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 @themirandagirl. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
