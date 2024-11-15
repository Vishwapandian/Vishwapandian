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
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Transform Any Textbook into an Interactive Course
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience personalized learning powered by AI. Upload your textbook and get instant access to structured lectures, assessments, and 24/7 tutoring support.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started Free
          </button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition">
            Watch Demo
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Why Students Love DeepLearn.io
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
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
      <section className="bg-blue-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using DeepLearn.io to master their subjects faster and more effectively.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
