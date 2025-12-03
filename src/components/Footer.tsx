import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="MedPostersHub Logo"
                className="h-10 w-10 rounded-md object-contain"
              />
              <span className="text-xl font-semibold text-foreground">
                MedPostersHub
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              Premium physiotherapy and medical educational posters — printed and
              delivered to clinics, institutes, and professionals.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#catalog" className="hover:text-primary">Catalog</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary">Return Policy</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919460970342" className="hover:text-primary">
                  +91 9460970342
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="https://wa.me/919460970342"
                  target="_blank"
                  className="hover:text-primary"
                >
                  Order via WhatsApp
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Jaipur, Rajasthan — Online Orders</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MedPostersHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;