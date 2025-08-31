import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Sparkles } from "lucide-react";
import EventModal from "@/components/EventModal";

interface EventType {
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
  category: string;
  featured: boolean;
}

const Events = () => {
  const [events] = useState<EventType[]>([
    {
      _id: "68b4868cceafee00833fdd93",
      id: "68b4868cceafee00833fdd93",
      type: "event",
      title: "AI in Healthcare Symposium",
      description: "Exploring the revolutionary applications of AI in modern healthcare and medical research.",
      fullDescription:
        "Join us for an in-depth exploration of how artificial intelligence is transforming healthcare...",
      date: "March 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Auditorium A, Science Building",
      capacity: 200,
      registered: 156,
      category: "Healthcare",
      featured: true,
    },
    {
      _id: "68b486baceafee00833fdd94",
      id: "68b486baceafee00833fdd94",
      type: "event",
      title: "Machine Learning Competition",
      description: "Annual ML hackathon with industry mentors and exciting prizes.",
      fullDescription:
        "Our biggest event of the year! Teams of 2-4 students will work on real-world machine learning challenges...",
      date: "March 22, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Computer Science Building",
      capacity: 120,
      registered: 89,
      category: "Competition",
      featured: true,
    },
    {
      _id: "68b486cdceafee00833fdd95",
      id: "68b486cdceafee00833fdd95",
      type: "event",
      title: "Ethics in AI Panel Discussion",
      description: "Important conversations about responsible AI development and deployment.",
      fullDescription:
        "As AI becomes more prevalent in society, it's crucial to address the ethical implications...",
      date: "April 5, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Room 201",
      capacity: 80,
      registered: 34,
      category: "Ethics",
      featured: false,
    },
    {
      _id: "68b486e0ceafee00833fdd96",
      id: "68b486e0ceafee00833fdd96",
      type: "event",
      title: "Industry Networking Mixer",
      description: "Connect with AI professionals and explore career opportunities.",
      fullDescription:
        "Network with professionals from leading AI companies including OpenAI, DeepMind, NVIDIA...",
      date: "April 12, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Student Union Ballroom",
      capacity: 150,
      registered: 67,
      category: "Networking",
      featured: false,
    },
    {
      _id: "68b486f2ceafee00833fdd97",
      id: "68b486f2ceafee00833fdd97",
      type: "event",
      title: "AI Startup Pitch Competition",
      description: "Present your AI startup ideas to venture capitalists and win funding.",
      fullDescription:
        "Have a brilliant AI startup idea? This is your chance to pitch it to real venture capitalists...",
      date: "April 20, 2024",
      time: "1:00 PM - 7:00 PM",
      location: "Innovation Hub",
      capacity: 100,
      registered: 45,
      category: "Entrepreneurship",
      featured: true,
    },
    {
      _id: "68b48704ceafee00833fdd98",
      id: "68b48704ceafee00833fdd98",
      type: "event",
      title: "AI Art & Creativity Showcase",
      description: "Explore the intersection of artificial intelligence and creative expression.",
      fullDescription:
        "Discover how AI is revolutionizing creative fields from music composition to visual arts...",
      date: "May 3, 2024",
      time: "4:00 PM - 8:00 PM",
      location: "Art Gallery, Student Center",
      capacity: 90,
      registered: 23,
      category: "Creative",
      featured: false,
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Healthcare", "Competition", "Ethics", "Networking", "Entrepreneurship", "Creative"];

  const filteredEvents =
    filterCategory === "All" ? events : events.filter((event) => event.category === filterCategory);

  const featuredEvents = events.filter((event) => event.featured);

  const handleEventClick = (event: EventType) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Healthcare: "bg-green-500/10 text-green-500 border-green-500/20",
      Competition: "bg-red-500/10 text-red-500 border-red-500/20",
      Ethics: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      Networking: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      Entrepreneurship: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      Creative: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    };
    return colors[category] || "bg-gray-500/10 text-gray-500 border-gray-500/20";
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Calendar className="w-6 h-6" />
              <span className="font-semibold">Upcoming Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Join Our <span className="text-gradient">AI Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover cutting-edge developments, network with professionals, and
              participate in hands-on experiences that will shape your AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-12 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Featured Events</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event, index) => (
                <Card
                  key={event._id}
                  className="hover-lift cursor-pointer group border-primary/20 bg-gradient-card"
                  onClick={() => handleEventClick(event)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{event.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filterCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <Card
                key={event._id}
                className="hover-lift cursor-pointer group"
                onClick={() => handleEventClick(event)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    {event.featured && (
                      <Sparkles className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className={
                        event.capacity - event.registered <= 10
                          ? "text-orange-500 font-semibold"
                          : "text-muted-foreground"
                      }>
                        {event.registered}/{event.capacity} registered
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Events;