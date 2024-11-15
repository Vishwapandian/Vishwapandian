import React from 'react';
import { BookOpen, Brain, MessageCircle, Award, BarChart, Clock } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Instant Course Generation",
      description: "Transform any textbook into a complete interactive course in minutes with AI-powered content creation"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Personalized Learning",
      description: "Adaptive learning paths that adjust to your pace and style, ensuring better understanding and retention"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "24/7 AI Tutor",
      description: "Get instant answers to your questions with our AI-powered chatbot tutor, available anytime"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Comprehensive Assessments",
      description: "Test your knowledge with auto-graded quizzes and receive immediate feedback"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and achievement tracking"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Learn at Your Pace",
      description: "Flexible scheduling that fits your lifestyle - study anytime, anywhere"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Menu Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Logo" className="w-8 h-8 rounded-md" />
            <span className="ml-3 text-xl font-semibold text-secondary-dark">DeepLearn.io</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-secondary-dark hover:text-primary-light transition">Home</a>
            <a href="#" className="text-secondary-dark hover:text-primary-light transition">Features</a>
            <a href="#" className="text-secondary-dark hover:text-primary-light transition">Pricing</a>
            <a href="#" className="text-secondary-dark hover:text-primary-light transition">Contact</a>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary-light text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-secondary-dark mb-6">
          PDF to Professor!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience personalized learning powered by AI. Upload your textbook and get instant access to structured lectures, assessments, and 24/7 tutoring support.
        </p>
        <div className="space-x-4">
          <button className="bg-primary-light text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
            Get Started Free
          </button>
          <button className="bg-white text-primary-dark px-8 py-3 rounded-lg font-semibold border border-primary-light hover:bg-blue-50 transition">
            Watch Demo
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-secondary-dark mb-12">
          Why Students Love DeepLearn.io
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-primary-dark mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-dark text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using DeepLearn.io to master their subjects faster and more effectively.
          </p>
          <button className="bg-white text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Learning Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>© 2024 DeepLearn.io. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;