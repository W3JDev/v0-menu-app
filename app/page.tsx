import { SiteHeader } from '@/components/site-header';
import FeaturedItems from '@/components/featured-items';
import MenuApp from '@/components/menu-app';
import { menuData } from '@/data/menu';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto py-6 px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight">Table & Apron</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Explore our menu for a delightful dining experience
            </p>
          </div>
          
          <FeaturedItems items={menuData.items.filter(item => item.featured)} />
          
          <MenuApp />
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Table & Apron. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}