import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  // Theme 1: Clean minimal card
  if (currentTheme === 'theme1') {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300 border border-border bg-card">
        <CardHeader className="p-4">
          <div className="aspect-square overflow-hidden rounded-md bg-secondary mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardTitle className="text-lg font-semibold text-card-foreground line-clamp-2">
            {truncateText(product.title, 50)}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {product.category}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground mb-4">
            {truncateText(product.description, 80)}
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-accent text-accent mr-1" />
              <span className="text-sm font-medium">{product.rating.rate}</span>
            </div>
            <span className="text-xs text-muted-foreground">({product.rating.count})</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
          <Button size="sm" className="flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // Theme 2: Elegant dark card
  if (currentTheme === 'theme2') {
    return (
      <Card className="group hover:shadow-xl transition-all duration-500 border border-border bg-card backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="p-6">
          <CardTitle className="text-xl font-bold text-card-foreground mb-2">
            {truncateText(product.title, 45)}
          </CardTitle>
          <CardDescription className="text-accent font-medium uppercase tracking-wide text-xs">
            {product.category}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {truncateText(product.description, 100)}
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating.rate)
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.rating.count} reviews)</span>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex items-center justify-between">
          <span className="text-2xl font-bold text-accent">{formatPrice(product.price)}</span>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // Theme 3: Playful colorful card
  return (
    <div className="playful-card group">
      <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
          ★ {product.rating.rate}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-card-foreground mb-2 leading-tight">
        {truncateText(product.title, 40)}
      </h3>
      
      <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wide">
        {product.category}
      </p>
      
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {truncateText(product.description, 70)}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {formatPrice(product.price)}
        </span>
        <Button 
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-6"
        >
          🛒 Add
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;