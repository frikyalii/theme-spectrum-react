import React from 'react';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useProducts } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();

  const features = [
    {
      icon: Sparkles,
      title: 'Beautiful Themes',
      description: 'Three distinct themes with unique layouts and typography'
    },
    {
      icon: Zap,
      title: 'Smooth Transitions',
      description: 'Seamless animations between theme switches'
    },
    {
      icon: Heart,
      title: 'Responsive Design',
      description: 'Perfect experience across all devices'
    }
  ];

  // Theme 1: Minimalist layout
  if (currentTheme === 'theme1') {
    return (
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Welcome to ThemeForge
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the power of dynamic theming with three distinct design languages.
            Switch between minimalist, professional, and playful themes instantly.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Explore Themes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg border border-border bg-card">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">Loading products...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Error: {error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }

  // Theme 2: Professional sidebar layout
  if (currentTheme === 'theme2') {
    return (
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="py-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-foreground mb-8 leading-tight">
              Professional Excellence in Design
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Discover our sophisticated approach to user experience design. 
              With elegant typography, refined spacing, and thoughtful interactions, 
              we create digital experiences that speak to the discerning professional.
            </p>
            <Button size="lg" className="text-lg px-10 py-5 bg-primary hover:bg-primary/90">
              Discover Excellence
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-4xl font-bold mb-16">Distinguished Features</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex space-x-6 p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="text-4xl font-bold mb-16">Curated Collection</h2>
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
              <p className="mt-6 text-muted-foreground text-lg">Curating excellence...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-20">
              <p className="text-destructive text-lg">Error: {error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }

  // Theme 3: Playful colorful layout
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
          Hey There! 🎨
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to our super fun and colorful world! Get ready for an amazing 
          journey filled with vibrant colors, playful animations, and delightful surprises! ✨
        </p>
        <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full">
          Let's Explore! 🚀
        </Button>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Amazing Features! 🌟
        </h2>
        <div className="card-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="playful-card text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Cool Stuff to Check Out! 🛍️
        </h2>
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="mt-6 text-muted-foreground text-lg">Loading awesome products... 🎁</p>
          </div>
        )}
        {error && (
          <div className="text-center py-16">
            <p className="text-destructive text-lg">Oops! {error} 😅</p>
          </div>
        )}
        {!loading && !error && (
          <div className="card-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;