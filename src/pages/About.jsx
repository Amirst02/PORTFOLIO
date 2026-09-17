
import "./about.css";
import { CheckCircle2 } from "lucide-react";
import { Terminal } from 'lucide-react';
import { Shield } from 'lucide-react';

const items = [
    {
        title: "Computer Science Student",
        subtitle: "Algorithms, mathematics, systems",
    },
    {
        title: "Full-Stack Developer",
        subtitle: "React, TypeScript, Node.js, SQL",
    },
    {
        title: "Web Development",
        subtitle: "Interfaces, performance, accessibility",
    },
    {
        title: "Cybersecurity",
        subtitle: "Secure defaults and hardened APIs",
    },
];





function About() {
    return (
        <div className="b20" id="about">

            <div className="b1">

                <div className="b2">

                    <h3 className="b6">About</h3>

                    <h3 className="b7">Engineering-minded, product-obsessed.</h3>


                    <h3 className="b8">I study computer science by day and
                        build web products the rest of the time —
                        the theory keeps my thinking rigorous,
                        the shipping keeps it honest.</h3>




                </div>



                <div className="b3">

                    <div className="b4">


                        <h3 className="b9">
                            I'm a Computer Science student and full-stack developer.
                            Most of my work sits between clean interface engineering and dependable backend logic:
                            designing data models, writing APIs that make sense to other developers,
                            and turning them into interfaces that feel fast and considered.
                            <br />
                            Web development is where I spend most of my hours, while cybersecurity shapes how I build — validating inputs,
                            thinking about attack surfaces and treating security as part of the design rather than an afterthought.
                            What drives all of it is a simple thing: building digital products people genuinely find useful.

                        </h3>

                        <div className="checklist-card">
                            <div className="checklist-grid">
                                {items.map((item) => (
                                    <div className="checklist-item" key={item.title}>
                                        <CheckCircle2 className="checklist-icon" size={20} />
                                        <div>
                                            <p className="checklist-title">{item.title}</p>
                                            <p className="checklist-subtitle">{item.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>


                    <div className="b5">

                        <div className="b15">
                            <Terminal color="gold" />

                            <h3 className="b11">How I work</h3>

                            < h3 className="b10">Understand the problem, sketch the data, build the smallest working version, then refine relentlessly
                                until the details feel inevitable.</h3>



                        </div>

                        <div className="b16">

                            <Shield color="blue" />

                            <h3 className="b12">What I care about</h3>


                            <h3 className="b13">Readable code, honest performance numbers,
                                secure defaults and interfaces that respect the person using them.</h3>



                        </div>



                    </div>


                </div>








            </div>




        </div>
    );
}

export default About;
