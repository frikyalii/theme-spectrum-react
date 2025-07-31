import React from 'react';
import { Palette, Code, Heart, Users, Target, Lightbulb } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const stats = [
    { label: 'Themes Created', value: '3', icon: Palette },
    { label: 'Lines of Code', value: '2.5k+', icon: Code },
    { label: 'Design Principles', value: '12', icon: Target },
    { label: 'Happy Users', value: '∞', icon: Heart },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Lead Designer',
      description: 'Passionate about creating beautiful, accessible interfaces'
    },
    {
      name: 'Sarah Kim',
      role: 'Frontend Developer',
      description: 'Bringing designs to life with clean, performant code'
    },
    {
      name: 'Marcus Johnson',
      role: 'UX Researcher',
      description: 'Understanding user needs to drive design decisions'
    }
  ];

  // Theme 1: Minimalist layout
  if (currentTheme === 'theme1') {
    return (
      <div className="space-y-16">
        {/* Hero */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-foreground mb-6">About ThemeForge</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about creating exceptional user experiences through innovative design systems
            that adapt to different contexts and user preferences.
          </p>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To democratize great design by providing flexible, accessible, and beautiful theme systems
                that empower creators to build remarkable digital experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every user is unique, and their interface should reflect their preferences, context, and needs.
                That's why we've created ThemeForge - a demonstration of how powerful theme switching can be.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 border border-border rounded-lg bg-card">
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 border border-border rounded-lg bg-card">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
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
              Crafting Digital Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              At ThemeForge, we believe that exceptional design transcends mere aesthetics. 
              It's about creating experiences that resonate with users on both emotional and functional levels, 
              establishing trust through consistency and delight through thoughtful details.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Philosophy</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation Through Constraint</h3>
                    <p className="text-muted-foreground">Great design emerges from thoughtful limitations and purposeful decisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Human-Centered Approach</h3>
                    <p className="text-muted-foreground">Every decision is made with the end user's experience and well-being in mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                    <p className="text-muted-foreground">Beautiful design must be backed by robust, performant, and accessible code.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="p-8 border border-border rounded-xl bg-card/50 backdrop-blur-sm text-center">
                    <Icon className="h-10 w-10 mx-auto mb-6 text-accent" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-4xl font-bold mb-16">Distinguished Team</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="p-8 border border-border rounded-xl bg-card/50 backdrop-blur-sm">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">{member.name}</h3>
                <p className="text-accent font-medium mb-4 text-center">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed text-center">{member.description}</p>
              </div>
            ))}
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
          About Our Awesome Team! 🎨
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We're a group of creative souls who love making beautiful, fun, and super cool websites! 
          Our mission is to spread joy through colorful designs and delightful experiences! ✨
        </p>
      </section>

      {/* Fun Stats */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Cool Numbers! 📊
        </h2>
        <div className="card-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="playful-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission */}
      <section>
        <div className="playful-card text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Super Mission! 🚀
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We believe that websites should be fun, beautiful, and make people smile! 😊 
            That's why we create amazing themes that bring joy to everyone who uses them.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every color, every animation, every little detail is carefully crafted to create 
            magical moments that brighten your day! 🌈
          </p>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Meet the Dream Team! 👥
        </h2>
        <div className="card-grid">
          {team.map((member, index) => (
            <div key={index} className="playful-card text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bounce transition-all duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-bold mb-4">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <div className="playful-card max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Want to Join the Fun? 🎉
          </h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for amazing people to join our colorful adventure!
          </p>
          <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-4 text-lg">
            Get In Touch! 💌
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;