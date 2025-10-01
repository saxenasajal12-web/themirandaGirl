import { Instagram, Mail, Award, Menu, X, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import heroImage from "@/assets/shreya-hero.jpg";
import awardImage from "@/assets/shreya-award.png";
import shreyaProfile from "@/assets/shreyaprofile.jpg";
import awardReel from "@/assets/shreyaaward.mp4";
import reel1 from "@/assets/shreyareel1.mp4";
import reel2 from "@/assets/shreyareel2.mp4";
import reel3 from "@/assets/shreyareel3.mp4";
import reel4 from "@/assets/shreyareel4.mp4";
import reel5 from "@/assets/shreyareel5.mp4";
import reel6 from "@/assets/shreyareel6.mp4";
import reel7 from "@/assets/shreyareel7.mp4";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingVideos({ ...playingVideos, [index]: true });
      } else {
        video.pause();
        setPlayingVideos({ ...playingVideos, [index]: false });
      }
    }
  };

  const reels = [
    { video: awardReel, views: "36.3K", likes: "1,478", link: "https://www.instagram.com/p/DO8GPDZkZHO/?igsh=YmF0aHd5NnVkbHdl" },
    { video: reel1, link: "https://www.instagram.com/reel/DLCuP7jvt65/?igsh=MXBsMmx3anRjaHR3Zw==" },
    { video: reel2, link: "https://www.instagram.com/reel/DPBljNzj-Vi/?igsh=NGQweTFneXNreGhn" },
    { video: reel3, link: "https://www.instagram.com/reel/DOLk4V3D4Ol/?igsh=eHVkZGljaGR5MXZ1" },
    { video: reel4, link: "https://www.instagram.com/reel/DOi0TpJj7T3/?igsh=MWx3OG9jaWhybmFwcA==" },
    { video: reel5, link: "https://www.instagram.com/reel/DMcv7x2vJ17/?igsh=MWJ6aDcxeG5mZ3dsag==" },
    { video: reel6, link: "https://www.instagram.com/reel/DK1z1g3vHix/?igsh=dHRscGFrenRoMmww" },
    { video: reel7, link: "https://www.instagram.com/reel/DKzPhByPrXj/?igsh=MWhlMWZzZGZ5N3V4NQ==" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3ed]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Shreya – Fashion Creator
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("profile")} className="hover:text-primary transition-colors">Profile</button>
              <button onClick={() => scrollToSection("awards")} className="hover:text-primary transition-colors">Awards</button>
              <button onClick={() => scrollToSection("reels")} className="hover:text-primary transition-colors">Reels</button>
              <a href="https://www.instagram.com/themirandagirl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <Link to="/contact" className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium">
                Book/Enquiries
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("profile")} className="text-left hover:text-primary transition-colors">Profile</button>
              <button onClick={() => scrollToSection("awards")} className="text-left hover:text-primary transition-colors">Awards</button>
              <button onClick={() => scrollToSection("reels")} className="text-left hover:text-primary transition-colors">Reels</button>
              <a href="https://www.instagram.com/themirandagirl/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
              <Link to="/contact" className="inline-block text-center px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium">Book/Enquiries</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section (fixed) */}
      <section 
  id="home" 
  // Use dynamic viewport height (dvh) to perfectly account for mobile browser UI (address bars, etc.)
  // Align content to the bottom with responsive padding based on viewport height (vh) for a more grounded feel
  className="relative flex items-end justify-center min-h-[100dvh] overflow-hidden"
>
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 w-full h-full">
    <img 
      src={heroImage} 
      alt="Shreya - Fashion Creator" 
      // This object-position strategy remains one of the best for portraits
      className="w-full h-full object-cover object-top sm:object-center"
    />
  </div>

  {/* GRADIENT OVERLAY */}
  {/* A stronger gradient at the bottom ensures text is always readable */}
  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

  {/* CONTENT */}
  <div 
    // Use viewport height for bottom padding so it scales with the screen
    className="relative z-10 w-full max-w-6xl text-center text-white px-4 pb-[15vh] md:pb-[20vh]"
  >
    {/* HEADING with Fluid Typography */}
    <h2 
      className="font-bold leading-[1.1] drop-shadow-lg
                 [font-size:clamp(2.75rem,10vw,6rem)]"
    >
      Shreya
    </h2>
    
    {/* SUBHEADING with Fluid Typography */}
    <p 
      className="font-light mt-4 max-w-3xl mx-auto drop-shadow-md
                 [font-size:clamp(1.125rem,4vw,1.875rem)]"
    >
      Fashion Creator & Influencer
    </p>
    
    {/* HANDLE with Fluid Typography */}
    <p 
      className="font-mono tracking-widest mt-8 drop-shadow
                 [font-size:clamp(1rem,2.5vw,1.25rem)]"
    >
      @themirandagirl
    </p>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 font-serif">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Elevating Fashion Through Content</h3>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Created engaging fashion content that inspires millions, specializing in trends, styling tips, and lifestyle content tailored for a modern, fashion-forward audience.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Built a vibrant community of fashion enthusiasts through authentic storytelling and a keen eye for emerging trends, offering a unique perspective on style, beauty, and lifestyle.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Produced runway-inspired looks and accessible street style content, transforming fashion into an art form that empowers audiences to express their individuality. Recognized as an Emerging Fashion Creator of the Year, the work continues to push boundaries and inspire the next generation of style innovators.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Collaborated with leading fashion brands, photographers, and stylists to curate visually stunning campaigns that merge creativity with commercial appeal. Every project emphasizes authenticity, innovation, and inclusivity.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Actively experiments with new formats, from short-form social media reels to editorial photo spreads, ensuring content is fresh, relatable, and resonates with diverse audiences across platforms.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Committed to inspiring confidence and self-expression, the content not only showcases trends but also encourages audiences to embrace their personal style. With a consistent focus on quality, creativity, and engagement, the journey continues to redefine modern fashion storytelling.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Profile</h3>
          
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-400 hover:to-purple-600 transition-all duration-500">
            <div className="bg-[#f6f1f1] rounded-3xl p-10 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-10 items-center">
                
                {/* Profile Image */}
                <div className="flex justify-center md:justify-start">
                  <img 
                    src={shreyaProfile} 
                    alt="Shreya Profile" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-purple-300 hover:scale-105 hover:shadow-purple-400/50 transition-transform duration-500"
                  />
                </div>

                {/* Personal Info */}
                <div className="space-y-4 md:col-span-2 text-gray-800">
                  <p className="flex items-center gap-2"><span className="font-semibold text-purple-600">Name:</span> Shreya </p>
                  <p className="flex items-center gap-2"><span className="font-semibold text-purple-600">Age:</span> 24</p>
                  <p className="flex items-center gap-2"><span className="font-semibold text-purple-600">Height:</span> 5'5"</p>
                  
                  <p className="flex items-center gap-2"><span className="font-semibold text-purple-600">Based in:</span> Chandigarh</p>

                  {/* Professional Work as badges */}
                  <p className="font-semibold text-lg text-gray-700 mt-4">Professional Work & Collaborations:</p>
                  <div className="flex flex-wrap gap-3">
                    {["TV / Ad Shoot", "Modeling", "Photoshoot", "Brand Collaboration"].map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium hover:bg-purple-200 transition-all cursor-pointer shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards / Recognition Section */}
      <section id="awards" className="py-20 px-4 bg-[#f5f3ed]">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-4">
            <Award className="w-12 h-12 text-accent" />
            <h3 className="text-4xl md:text-5xl font-extrabold text-center">
              Recognition
            </h3>
          </div>

          {/* Award Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Award Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={awardImage} alt="InfluenceX25 Award" className="w-full h-auto" />
            </div>

            {/* Award Details */}
            <div>
              <h4 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Emerging Fashion Creator of the Year
              </h4>
              <p className="text-xl md:text-2xl mb-6 font-semibold">
                Awarded by InfluenceX25 at the National Event
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Recognized for outstanding creativity, originality, and influence in the fashion industry. 
                This accolade highlights the ability to inspire and engage a growing audience through innovative fashion content.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The recognition celebrates dedication, authenticity, and a commitment to shaping trends 
                that resonate with a modern, style-conscious community.
              </p>
              <a 
                href="https://www.instagram.com/p/DO8GPDZkZHO/?igsh=YmF0aHd5NnVkbHdl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity font-semibold"
              >
                View Award Post
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section id="reels" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center">Featured Content</h3>
          <p className="text-lg text-muted-foreground text-center mb-12">Explore viral moments and trending fashion content</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reels.map((reel, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <video ref={(el) => (videoRefs.current[index] = el)} className="w-full h-[450px] object-cover" src={reel.video} loop playsInline onClick={() => togglePlayPause(index)} />
                <button onClick={() => togglePlayPause(index)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 backdrop-blur-sm">
                  {playingVideos[index] ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none flex items-end p-4">
                  <a href={reel.link} target="_blank" rel="noopener noreferrer" className="inline-block text-xs px-3 py-1 bg-primary/80 hover:bg-primary rounded-full transition-colors pointer-events-auto">View on Instagram</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://www.instagram.com/themirandagirl/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-semibold">View More on Instagram</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#f5f3ed]">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's Collaborate</h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Available for brand partnerships, collaborations, and creative projects
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              <Mail className="w-6 h-6" /> Contact Form
            </Link>
            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=work.themirandagirl@gmail.com&tf=1"
              className="flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              <Mail className="w-6 h-6" /> Email Me
            </a>
            <a
              href="https://www.instagram.com/themirandagirl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              <Instagram className="w-6 h-6" /> @themirandagirl
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 @themirandagirl. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
