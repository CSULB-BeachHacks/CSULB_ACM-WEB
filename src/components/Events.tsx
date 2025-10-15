const Events = () => {
  const workshops = [
    { num: 1, officers: "Soham, Bryan", workshop: "Learning to use Git", date: "Sep 9" },
    { num: 2, officers: "Divyanshu, Keshav", workshop: "Intro to WebDev & Chrome Extensions", date: "Sep 16" },
    { num: 3, officers: "Keshav, Winston", workshop: "Why Linux is AWESOME", date: "Sep 23" },
    { num: 4, officers: "Winston, Keshav", workshop: "Serverless / REST API", date: "Sep 30" },
    { num: 5, officers: "Vansh, Bryan", workshop: "Malware Program", date: "Oct 7" },
    { num: 6, officers: "Marisol, Bryan", workshop: "Game Dev", date: "Oct 14" },
    { num: 7, officers: "Keshav, Tiago, alumni: Charles, Sroth", workshop: "How to land your first internship", date: "Oct 21" },
    { num: 8, officers: "Aailand, industry rep", workshop: "Resume review + interview guide", date: "TBA" },
    { num: 9, officers: "Sophia, Bryan", workshop: "How to make the most of a hackathon", date: "Oct 28" },
    { num: 10, officers: "Angel, Keshav", workshop: "Everything about Open Source Code", date: "Nov 4" },
    { num: 11, officers: "All ACM Officers, Bryan + Keshav (hosts), Starbound Team Coordinators", workshop: "Project Starbound Liftoff", date: "Nov 18" },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-slide-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gradient glow-text">
              Events
            </h2>
            <p className="text-muted-foreground text-lg">
              All workshops are held on <strong className="text-primary">Tuesdays from 4–5 PM</strong>
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/50 glow-border">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary/20 to-secondary/10 border-b border-primary/30">
                  <th className="px-6 py-4 text-left text-primary font-bold uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-primary font-bold uppercase tracking-wider">
                    Officers
                  </th>
                  <th className="px-6 py-4 text-left text-primary font-bold uppercase tracking-wider">
                    Workshop
                  </th>
                  <th className="px-6 py-4 text-left text-primary font-bold uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card/30 backdrop-blur-sm">
                {workshops.map((event, index) => (
                  <tr 
                    key={event.num}
                    className="border-b border-border/30 hover:bg-primary/5 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-primary">{event.num}</td>
                    <td className="px-6 py-4 text-foreground/80">{event.officers}</td>
                    <td className="px-6 py-4 text-foreground font-medium">{event.workshop}</td>
                    <td className="px-6 py-4 text-foreground/80">{event.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* BeachHacks Processing Animation */}
          <div className="text-center pt-8">
            <a 
              href="https://beachhacks.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="px-8 py-4 bg-gradient-to-r from-primary/20 to-secondary/10 rounded-xl border border-primary/50 glow-border hover:scale-105 transition-transform scan-effect">
                <p className="text-2xl font-bold text-gradient animate-processing">
                  BeachHacks 9.0 processing
                  <span className="inline-flex">
                    <span className="animate-[pulse_1.4s_ease-in-out_infinite]">.</span>
                    <span className="animate-[pulse_1.4s_ease-in-out_0.2s_infinite]">.</span>
                    <span className="animate-[pulse_1.4s_ease-in-out_0.4s_infinite]">.</span>
                    <span className="animate-[pulse_1.4s_ease-in-out_0.6s_infinite]">.</span>
                    <span className="animate-[pulse_1.4s_ease-in-out_0.8s_infinite]">.</span>
                    <span className="animate-[pulse_1.4s_ease-in-out_1s_infinite]">.</span>
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
