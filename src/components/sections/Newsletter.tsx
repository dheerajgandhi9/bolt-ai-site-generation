import { Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="bg-indigo-100 rounded-full p-3">
                    <Gift className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Get 15% Off Your First Order
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Subscribe to our newsletter and be the first to know about new products, 
                  exclusive deals, and special offers.
                </p>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    No spam, unsubscribe anytime
                  </span>
                </div>
              </div>
              
              {/* Form */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    placeholder="Enter your email address"
                    className="flex-1"
                  />
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}