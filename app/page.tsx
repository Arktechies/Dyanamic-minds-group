import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from './components/header'
import Footer from './components/footer'
import { ArrowRight, GraduationCap, School, Briefcase, Rocket, Check, Book, Brain, Calculator, Code, Focus, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-20 bg-gradient-to-br from-[#046380] to-[#002f3c] text-white rounded-3xl shadow-xl overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                DMG – Empowering Minds, Unlocking Potential
              </h1>
              <p className="text-lg sm:text-xl font-semibold mb-6 leading-relaxed">
                We empower <span className="font-bold">Students, Teachers,</span> and <span className="font-bold">Professionals</span> through:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Maths Mastery", description: "Build problem-solving skills." },
                  { title: "Memory Techniques", description: "Boost recall and retention." },
                  { title: "Mind Mastery", description: "Improve focus and resilience." },
                  { title: "AI Tools for Teachers", description: "Create smarter, engaging classrooms." },
                  { title: "Meditation Programs", description: "Reduce stress and build emotional balance." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-[#ffd700] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-lg sm:text-xl text-[#ffd700]">{item.title}:</span>
                      <span className="block font-medium">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full sm:w-auto bg-[#911146] text-white hover:bg-[#7d0f3d] transition-colors duration-300 text-sm sm:text-base md:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="sm:whitespace-nowrap">
                  👉 Unlock Your <span className="underline">Potential</span> Today!
                </span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Dynamic Minds Group"
                alt="Dynamic Minds Group Hero Image"
                width={500}
                height={500}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12 sm:mb-20 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#046380]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-16 text-[#046380] text-center">
            <span className="gradient-underline">Results You Can Expect</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Sharper Focus", description: "Eliminate distractions and stay productive.", icon: Focus },
              { title: "Stronger Memory", description: "Retain and recall information effortlessly.", icon: Brain },
              { title: "Increased Confidence", description: "Face challenges with courage.", icon: Trophy },
              { title: "Improved Performance", description: "Excel academically and professionally.", icon: GraduationCap },
              { title: "Faster Decisions", description: "Make clear, confident choices.", icon: Rocket },
              { title: "Smarter Teaching with AI Tools", description: "Transform classrooms with innovation.", icon: Code },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-[#046380] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <item.icon className="h-12 w-12 sm:h-16 sm:w-16 text-[#911146] mb-4" />
                  <h3 className="font-extrabold text-lg sm:text-xl mb-2 text-[#046380]">{item.title}</h3>
                  <p className="text-gray-700 font-medium text-base sm:text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#911146] text-white hover:bg-[#7d0f3d] transition-colors duration-300 text-sm sm:text-base md:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="sm:whitespace-nowrap">
                👉 Experience These Results Today!
              </span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-12 sm:mb-20 bg-[#046380] p-6 sm:p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-16 text-white text-center">
            <span className="gradient-underline">Are You Facing These Challenges?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: "Students", description: "Struggling with focus and exam stress.", icon: GraduationCap },
              { title: "Teachers", description: "Overwhelmed by outdated tools.", icon: School },
              { title: "Professionals", description: "Burned out and unproductive.", icon: Briefcase },
              { title: "Entrepreneurs", description: "Stuck with indecision and self-doubt.", icon: Rocket },
            ].map((item, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#ffd700] mr-4" />
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#911146]">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 font-semibold text-base sm:text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-base sm:text-lg md:text-xl font-bold mt-8 sm:mt-10 mb-6 sm:mb-8 text-white">
            We provide proven tools and strategies to overcome these challenges.
          </p>
          <div className="text-center">
            <Button size="lg" className="w-full sm:w-auto bg-white text-[#911146] hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base md:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="sm:whitespace-nowrap">Start Today!</span> <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        {/* How Our Products Solve Your Problems Section */}
        <section className="mb-12 sm:mb-20 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#046380]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-16 text-[#046380] text-center">
            <span className="gradient-underline">How Our Products Solve Your Problems</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-8 text-center">
            At <span className="font-extrabold">Dynamic Minds Group</span>, we address real challenges with <span className="font-extrabold">proven strategies, innovative tools,</span> and <span className="font-extrabold">personalized solutions</span> to deliver impactful results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "For Students",
                items: [
                  "Master memory, excel in math, and enjoy interactive learning.",
                ],
                cta: "Unlock Academic Excellence Today!"
              },
              {
                title: "For Teachers",
                items: [
                  "Use AI tools, enhance teaching methods, and boost student engagement.",
                ],
                cta: "Revolutionize Your Classroom Today!"
              },
              {
                title: "For Schools",
                items: [
                  "Student and teacher workshops for better results.",
                ],
                cta: "Transform Your School's Learning Experience!"
              },
              {
                title: "For Everyone",
                items: [
                  "Meditation programs for stress-free living and focus.",
                ],
                cta: "Find Balance and Inner Peace!"
              }
            ].map((category, index) => (
              <Card key={index} className="bg-white border-[#046380] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full justify-between">
                  <div>
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${encodeURIComponent(category.title)}`}
                      alt={`${category.title} Icon`}
                      width={100}
                      height={100}
                      className="mb-4 mx-auto"
                    />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-4 text-[#911146]">
                      <span className="text-[#ffd700] mr-2">✓</span> {category.title}:
                    </h3>
                    <ul className="space-y-2 mb-4 flex-grow">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-base sm:text-lg flex items-start">
                          <Check className="mr-2 h-5 w-5 text-[#ffd700] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-[#046380] text-white hover:bg-[#034e66] text-sm sm:text-base md:text-lg font-bold mt-4">
                    <span className="sm:whitespace-nowrap">👉 {category.cta}</span> <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#911146] text-white hover:bg-[#7d0f3d] transition-colors duration-300 text-sm sm:text-base md:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="sm:whitespace-nowrap">👉 Experience Smarter Learning Today!</span> <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        {/* Belief Section */}
        <section className="mb-12 sm:mb-20 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#046380]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-16 text-[#046380] text-center">
            <span className="gradient-underline">We Believe You Deserve More</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400&text=We Believe"
                alt="We Believe Illustration"
                width={400}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <ul className="space-y-4 mb-8">
                {[
                  "To unlock your full potential.",
                  "To achieve your goals confidently.",
                  "To excel in every aspect of life.",
                  "To have proven tools that deliver results.",
                ].map((belief, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-[#ffd700] flex-shrink-0" />
                    <span className="text-[#911146] font-extrabold text-base sm:text-lg md:text-xl">{belief}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button size="lg" className="w-full sm:w-auto bg-[#911146] text-white hover:bg-[#7d0f3d] transition-colors duration-300 text-sm sm:text-base md:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="sm:whitespace-nowrap">👉 You Deserve Success. Start Today!</span> <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-12 sm:mb-20 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#046380]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-16 text-[#046380] text-center">
            <span className="gradient-underline">Our Leadership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                name: "Aditi Singhal",
                role: "CEO, Dynamic Minds Group",
                image: "/placeholder.svg?height=400&width=400&text=Aditi Singhal",
                achievements: [
                  "Guinness World Record Holder",
                  "Google Certified Educator",
                  "International Trainer & TEDx Speaker",
                  "Co-Author of 6 Bestselling Books",
                  "1,000+ Global Workshops",
                ],
                mantra: "Add Smart Work to Your Hard Work®"
              },
              {
                name: "Sudhir Singhal",
                role: "COO, Dynamic Minds Group",
                image: "/placeholder.svg?height=400&width=400&text=Sudhir Singhal",
                achievements: [
                  "Guinness World Record Holder",
                  "Google Certified Trainer",
                  "Motivational Speaker",
                  "20+ Years in Education & Technology",
                  "Trained 30,000+ Teachers",
                ],
              }
            ].map((leader, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={200}
                    height={200}
                    className="rounded-full shadow-lg mb-4 sm:mb-0 sm:mr-6"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-[#911146]">{leader.name}</h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#046380]">{leader.role}</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2 text-left font-sans leading-relaxed">
                  {leader.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-[#ffd700] flex-shrink-0" />
                      <span className="text-base sm:text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
                {leader.mantra && (
                  <p className="mt-4 font-bold text-[#911146] text-lg sm:text-xl">
                    Mantra: "{leader.mantra}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Our Promise to You Section */}
        <section className="mb-12 sm:mb-20 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#046380]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-16 text-[#046380] text-center">
            <span className="gradient-underline">Our Promise to You</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white border-[#046380] shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <ul className="space-y-4">
                  {[
                    "Guaranteed Results: See measurable improvements.",
                    "Personalized Solutions: Tailored to your needs.",
                    "Proven Techniques: Backed by global certifications.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-[#ffd700] flex-shrink-0" />
                      <span className="text-base sm:text-lg"><span className="font-extrabold">{item.split(':')[0]}:</span> {item.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#046380] shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <ul className="space-y-4">
                  {[
                    "Engaging Programs: Practical and impactful sessions.",
                    "Ongoing Support: We're with you every step.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-[#ffd700] flex-shrink-0" />
                      <span className="text-base sm:text-lg"><span className="font-extrabold">{item.split(':')[0]}:</span> {item.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#046380] text-white hover:bg-[#034e66] transition-colors duration-300 text-sm sm:text-base md:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="sm:whitespace-nowrap">👉 Start with Confidence Today!</span> <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-12 sm:mb-20 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#046380]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-16 text-[#046380] text-center">
            <span className="gradient-underline">Our Books</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              "How to Improve Concentration",
              "How to Memorize Anything",
              "The Ultimate Memory Handbook for Students",
              "How to Become a Human Calculator",
              "Crack the Code",
              "How to Be a Math Magician",
              "Vedic Ganit",
            ].map((title, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/placeholder.svg?height=300&width=200&text=${encodeURIComponent(title)}`}
                  alt={title}
                  width={200}
                  height={300}
                  className="rounded-lg shadow-md mb-4 transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-[#ffd700]"
                />
                <h3 className="text-center text-sm sm:text-base font-bold text-[#911146] hover:text-[#046380] transition-colors duration-300">{title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#911146] text-white hover:bg-[#7d0f3d] transition-colors duration-300 text-sm sm:text-base md:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="sm:whitespace-nowrap">👉 Explore Our Books Today!</span> <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

