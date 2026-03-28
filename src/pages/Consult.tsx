import React from 'react';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { Phone, Video, MessageSquare, Star, Clock } from 'lucide-react';

export const Consult = () => {
  return (
    <div>
      <Navbar title="Connect" />
      
      <main className="px-6 py-4 max-w-lg mx-auto space-y-8">
        
        {/* Next Appointment */}
        <Card variant="elevated" className="bg-primary text-on-primary shadow-blush-glow glow-gradient px-6 py-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="px-3 py-1 bg-surface-container-lowest/20 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">Upcoming</span>
              <h2 className="text-xl font-heading font-bold mt-3">Dr. Meera Sharma</h2>
              <p className="text-primary-container text-sm font-medium">Gynecologist</p>
            </div>
            <div className="w-14 h-14 rounded-full border-2 border-primary-container overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="flex gap-4 p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md border border-white/10 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-container" />
              <span className="font-semibold">Today, 4:30 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-lowest text-primary rounded-xl font-bold squish-effect">
              <Video className="w-4 h-4" /> Join Call
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-primary-container/20 hover:bg-primary-container/30 transition-colors text-white rounded-xl font-bold squish-effect border border-white/10">
              Reschedule
            </button>
          </div>
        </Card>

        <section>
          <div className="flex justify-between items-end mb-4 pr-1">
            <h2 className="font-heading text-xl font-bold text-on-surface">Recommended Specialists</h2>
            <button className="text-primary text-sm font-medium font-body hover:underline">Filters</button>
          </div>
          
          <div className="space-y-4">
            {[ 
              { name: 'Dr. Anita Desai', role: 'Nutritionist', rating: '4.9', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop' },
              { name: 'Dr. Rahul Verma', role: 'General Physician', rating: '4.8', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop' }
            ].map((doc, i) => (
              <Card key={i} variant="flat" padding="md" className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-on-surface font-heading">{doc.name}</h3>
                  <p className="text-sm text-on-surface-variant font-medium">{doc.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs font-bold text-orange-500">
                    <Star className="w-3 h-3 fill-current" /> {doc.rating}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="p-2 rounded-full bg-surface-container-highest text-on-surface-variant hover:bg-primary-container transition-colors squish-effect">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-primary text-on-primary shadow-blush-glow transition-transform squish-effect">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};
