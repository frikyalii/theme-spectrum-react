import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@themeforge.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: '123 Design Street, Creative City, DC 12345',
      action: 'Get Directions'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Available 24/7 for instant support',
      action: 'Start Chat'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Theme 1: Minimalist layout
  if (currentTheme === 'theme1') {
    return (
      <div className="space-y-16">
        {/* Hero */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </section>

        {/* Contact Methods */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg mx-auto flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{method.description}</CardDescription>
                    <Button variant="outline" size="sm">{method.action}</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    );
  }

  // Theme 2: Professional layout
  if (currentTheme === 'theme2') {
    return (
      <div className="space-y-24">
        {/* Hero */}
        <section className="py-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-foreground mb-8 leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Excellence in communication begins with listening. We're here to understand your vision, 
              address your concerns, and explore how we can create something extraordinary together.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Methods */}
            <div>
              <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>
              <div className="space-y-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-6 p-8 border border-border rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{method.description}</p>
                        <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-12">Send a Message</h2>
              <div className="p-8 border border-border rounded-xl bg-card/50 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="text-lg py-3"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        className="text-lg py-3"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-foreground">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        className="text-lg py-3"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">Message *</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share your thoughts, questions, or project details..."
                        rows={6}
                        className="text-lg"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-4 bg-accent hover:bg-accent/90">
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto p-12 border border-border rounded-xl bg-card/30 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">Response Time</span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We typically respond to all inquiries within 24 hours during business days. 
              For urgent matters, please call us directly.
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Theme 3: Playful layout
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
          Let's Chat! 💬
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We absolutely love hearing from awesome people like you! Drop us a line and let's create something amazing together! ✨
        </p>
      </section>

      {/* Contact Methods */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Ways to Reach Us! 📞
        </h2>
        <div className="card-grid">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="playful-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full">
                  {method.action} 🚀
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="max-w-2xl mx-auto">
          <div className="playful-card">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Send Us a Message! 📝
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-primary">Your Name ✨</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="What should we call you?"
                    className="rounded-xl border-2 border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-primary">Email Address 📧</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.awesome@email.com"
                    className="rounded-xl border-2 border-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2 text-primary">Subject 🎯</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this magical message about?"
                  className="rounded-xl border-2 border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-primary">Your Message 💌</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us all about your awesome ideas!"
                  rows={5}
                  className="rounded-xl border-2 border-primary/20 focus:border-primary"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl py-4 text-lg font-bold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send My Awesome Message! 🚀
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section>
        <div className="playful-card text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Globe className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fun Fact! 🌟
            </span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We respond to messages super fast! Our average response time is just 2 hours because we're excited to chat with you! 
            Plus, every message makes us do a little happy dance! 💃🕺
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;