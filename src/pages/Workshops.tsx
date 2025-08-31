import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, BookOpen, Sparkles } from "lucide-react";
import EventModal from "@/components/EventModal";

interface Workshop {
  _id: string;
  id: string;
  type: "event" | "workshop";
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  level: string;
  duration: string;
  featured: boolean;
}

const Workshops = () => {
  const [workshops] = useState<Workshop[]>([
    {
      _id: "68b48832ceafee00833fdd99",
      id: "68b48832ceafee00833fdd99",
      type: "workshop",
      title: "Generative AI with Transformers",
      description: "Learn how to build text and image generation apps using modern transformers.",
      fullDescription:
        "In this advanced workshop, you’ll explore generative AI techniques with Hugging Face Transformers...",
      date: "April 29, 2024",
      time: "9:30 AM - 5:30 PM",
      location: "Innovation Hall, CS Building",
      capacity: 40,
      registered: 26,
      level: "Advanced",
      duration: "8 hours",
      featured: true,
    },
    {
      _id: "68b4885bceafee00833fdd9a",
      id: "68b4885bceafee00833fdd9a",
      type: "workshop",
      title: "Introduction to Machine Learning",
      description: "Hands-on workshop covering ML fundamentals with Python and scikit-learn.",
      fullDescription:
        "Perfect for beginners! This comprehensive workshop will introduce you to the fundamentals of machine learning...",
      date: "March 18, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Lab 301, CS Building",
      capacity: 30,
      registered: 24,
      level: "Beginner",
      duration: "6 hours",
      featured: true,
    },
    {
      _id: "68b4886eceafee00833fdd9b",
      id: "68b4886eceafee00833fdd9b",
      type: "workshop",
      title: "Deep Learning with TensorFlow",
      description: "Build neural networks from scratch using TensorFlow and Keras.",
      fullDescription:
        "Dive deep into neural networks! This intensive workshop covers the fundamentals of deep learning using TensorFlow...",
      date: "March 25, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "AI Lab, Engineering Building",
      capacity: 25,
      registered: 18,
      level: "Intermediate",
      duration: "8 hours",
      featured: true,
    },
    {
      _id: "68b4887fceafee00833fdd9c",
      id: "68b4887fceafee00833fdd9c",
      type: "workshop",
      title: "Natural Language Processing Bootcamp",
      description: "Master text analysis, sentiment analysis, and language models.",
      fullDescription:
        "Explore the fascinating world of NLP! This bootcamp covers text preprocessing, tokenization, sentiment analysis...",
      date: "April 1, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Workshop Room B",
      capacity: 35,
      registered: 12,
      level: "Intermediate",
      duration: "8 hours",
      featured: false,
    },
    {
      _id: "68b48890ceafee00833fdd9d",
      id: "68b48890ceafee00833fdd9d",
      type: "workshop",
      title: "Computer Vision Fundamentals",
      description: "Learn image processing, object detection, and facial recognition.",
      fullDescription:
        "See the world through AI eyes! This workshop introduces computer vision concepts using OpenCV and deep learning frameworks...",
      date: "April 8, 2024",
      time: "1:00 PM - 7:00 PM",
      location: "Vision Lab, CS Building",
      capacity: 20,
      registered: 8,
      level: "Intermediate",
      duration: "6 hours",
      featured: false,
    },
    {
      _id: "68b488a0ceafee00833fdd9e",
      id: "68b488a0ceafee00833fdd9e",
      type: "workshop",
      title: "AI Model Deployment Workshop",
      description: "Deploy your ML models to production using cloud platforms.",
      fullDescription:
        "Bridge the gap between development and production! Learn how to deploy your machine learning models...",
      date: "April 15, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Cloud Lab, Innovation Center",
      capacity: 28,
      registered: 15,
      level: "Advanced",
      duration: "6 hours",
      featured: false,
    },
  ]);

  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterLevel, setFilterLevel] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredWorkshops =
    filterLevel === "All" ? workshops : workshops.filter((workshop) => workshop.level === filterLevel);

  const featuredWorkshops = workshops.filter((workshop) => workshop.featured);

  const handleWorkshopClick = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  const getLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      Beginner: "bg-green-500/10 text-green-500 border-green-500/20",
      Intermediate: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      Advanced: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return colors[level] || "bg-gray-500/10 text-gray-500 border-gray-500/20";
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="font-semibold">Hands-on Learning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI <span className="text-gradient">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master artificial intelligence through intensive, hands-on workshops. 
              From beginner-friendly introductions to advanced specialized topics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      {featuredWorkshops.length > 0 && (
        <section className="py-12 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Featured Workshops</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorkshops.map((workshop, index) => (
                <Card 
                  key={workshop._id} 
                  className="hover-lift cursor-pointer group border-primary/20 bg-gradient-card"
                  onClick={() => handleWorkshopClick(workshop)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex gap-2">
                        <Badge className={getLevelColor(workshop.level)}>
                          {workshop.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {workshop.duration}
                        </Badge>
                      </div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{workshop.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{workshop.registered}/{workshop.capacity} registered</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Workshops */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {levels.map((level) => (
              <Button
                key={level}
                variant={filterLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterLevel(level)}
                className="transition-all duration-300"
              >
                {level}
              </Button>
            ))}
          </div>

          {/* Workshops Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((workshop, index) => (
              <Card 
                key={workshop._id} 
                className="hover-lift cursor-pointer group"
                onClick={() => handleWorkshopClick(workshop)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                      <Badge className={getLevelColor(workshop.level)}>
                        {workshop.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {workshop.duration}
                      </Badge>
                    </div>
                    {workshop.featured && (
                      <Sparkles className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {workshop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{workshop.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className={
                        workshop.capacity - workshop.registered <= 5 
                          ? "text-orange-500 font-semibold" 
                          : "text-muted-foreground"
                      }>
                        {workshop.registered}/{workshop.capacity} registered
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Modal */}
      <EventModal
        event={selectedWorkshop}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Workshops;