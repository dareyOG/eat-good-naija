import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

function ContactFooter() {
  const media = [
    { name: 'Facebook', icon: Facebook },
    { name: 'Twitter', icon: Twitter },
    { name: 'Instagram', icon: Instagram },
    { name: 'Linkedin', icon: Linkedin },
  ];
  return (
    <footer className="border-t py-5 text-center text-[1.2rem] text-gray-600">
      <p className="text-[1.5rem] text-primary">
        Follow us on our social media platforms
      </p>
      <div className="mt-4 flex justify-center gap-4">
        {media.map((item) => {
          const Icon = item.icon;
          return (
            <a href="#" key={item.name}>
              <Icon className="size-6 text-primary" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default ContactFooter;
