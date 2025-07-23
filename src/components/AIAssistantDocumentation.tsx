import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  FileText, 
  Sparkles, 
  ThumbsUp, 
  ThumbsDown,
  Send,
  RotateCcw,
  BookOpen,
  ArrowLeft
} from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

interface AIAssistantDocumentationProps {
  onBack?: () => void;
}

export function AIAssistantDocumentation({ onBack }: AIAssistantDocumentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Welcome to AI Assistant",
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold">AI Assistant User Guide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your intelligent companion for question answering, text summarization, and creative writing. 
            This guide will walk you through all the features and how to use them effectively.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">Question Answering</Badge>
            <Badge variant="secondary" className="px-4 py-2">Text Summarization</Badge>
            <Badge variant="secondary" className="px-4 py-2">Creative Writing</Badge>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Getting Started",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">How to Get Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Step 1: Choose Your Task</h3>
              <p className="text-muted-foreground">
                Select from three available task types on the main screen:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-surface rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <span>Question Answering</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-surface rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                  <span>Text Summarization</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-surface rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span>Creative Writing</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Step 2: Start Chatting</h3>
              <p className="text-muted-foreground">
                Once you select a task, you can:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Use suggested prompts to get started quickly
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Type your own questions or requests
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Press Enter or click Send to get responses
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Provide feedback on responses
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Question Answering",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Question Answering</h2>
            <p className="text-muted-foreground">Get factual answers to your questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Best For:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Factual information queries</li>
                <li>• Educational questions</li>
                <li>• General knowledge topics</li>
                <li>• Explanations of concepts</li>
                <li>• How-to questions</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Example Prompts:</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="block text-left p-2">
                  "What is the capital of France?"
                </Badge>
                <Badge variant="outline" className="block text-left p-2">
                  "Can you explain why the Eiffel Tower is famous?"
                </Badge>
                <Badge variant="outline" className="block text-left p-2">
                  "List three interesting facts about Paris."
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Text Summarization",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Text Summarization</h2>
            <p className="text-muted-foreground">Summarize articles, documents, or long texts</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Best For:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Long articles or documents</li>
                <li>• Research papers</li>
                <li>• News articles</li>
                <li>• Meeting notes</li>
                <li>• Book chapters</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Example Prompts:</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="block text-left p-2">
                  "Summarize the following article: [paste article]"
                </Badge>
                <Badge variant="outline" className="block text-left p-2">
                  "What are the key points in this paragraph: [text]"
                </Badge>
                <Badge variant="outline" className="block text-left p-2">
                  "Give a short overview of this content: [text]"
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Creative Writing",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Creative Writing</h2>
            <p className="text-muted-foreground">Generate stories, poems, and creative content</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Best For:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Short stories and narratives</li>
                <li>• Poetry and creative verse</li>
                <li>• Character development</li>
                <li>• Plot ideas and outlines</li>
                <li>• Creative brainstorming</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Example Prompts:</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="block text-left p-2">
                  "Write a fantasy story about a dragon and a princess."
                </Badge>
                <Badge variant="outline" className="block text-left p-2">
                  "Compose a poem on the theme of autumn."
                </Badge>
                <Badge variant="outline" className="block text-left p-2">
                  "Generate a sci-fi plot involving AI and time travel."
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Interface Features",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Interface Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Chat Interface
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Scrollable conversation history</li>
                <li>• Sticky input area at bottom</li>
                <li>• Real-time typing indicators</li>
                <li>• Press Enter to send messages</li>
                <li>• Shift+Enter for new lines</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <RotateCcw className="w-5 h-5" />
                Task Management
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Switch between tasks anytime</li>
                <li>• Conversation history per task</li>
                <li>• Example prompts for each task</li>
                <li>• Clear task descriptions</li>
                <li>• Visual task indicators</li>
              </ul>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Feedback System",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Feedback & Quality Control</h2>
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-4 p-4 bg-gradient-surface rounded-lg">
              <span className="text-sm text-muted-foreground">Was this helpful?</span>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <ThumbsUp className="w-4 h-4 text-green-600" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <ThumbsDown className="w-4 h-4 text-red-600" />
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">How Feedback Works:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Rate each AI response with thumbs up/down</li>
                <li>• Feedback is logged for analysis</li>
                <li>• Helps improve future responses</li>
                <li>• Visual confirmation when submitted</li>
                <li>• Data stored for quality improvements</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">What Gets Tracked:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Positive/negative feedback rating</li>
                <li>• Task type and context</li>
                <li>• Response timestamp</li>
                <li>• User query context</li>
                <li>• Response content preview</li>
              </ul>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Tips for Best Results",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Tips for Best Results</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Writing Effective Prompts:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Be specific and clear in your requests</li>
                <li>• Provide context when needed</li>
                <li>• Use the suggested prompts as starting points</li>
                <li>• Break complex requests into smaller parts</li>
                <li>• Specify desired length or format</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-surface border-0">
              <h3 className="font-semibold mb-3">Best Practices:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Choose the right task type for your needs</li>
                <li>• Review example prompts before starting</li>
                <li>• Provide feedback to improve responses</li>
                <li>• Use follow-up questions for clarification</li>
                <li>• Switch tasks when needed</li>
              </ul>
            </Card>
          </div>
          
          <Card className="p-4 bg-gradient-surface border-0 text-center">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground">
              The AI Assistant is designed to be intuitive and helpful. 
              If you encounter any issues or need clarification, try rephrasing your question 
              or switching to a different task type that might better suit your needs.
            </p>
          </Card>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-6xl mx-auto bg-gradient-surface border-0 shadow-ai">
          {/* Header */}
          <div className="p-6 border-b border-border/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {onBack && (
                  <Button
                    variant="outline"
                    onClick={onBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Assistant
                  </Button>
                )}
                <div>
                  <h1 className="text-2xl font-bold">{slides[currentSlide].title}</h1>
                  <p className="text-sm text-muted-foreground">
                    Slide {currentSlide + 1} of {slides.length}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 min-h-[500px]">
            {slides[currentSlide].content}
          </div>

          {/* Navigation */}
          <div className="p-6 border-t border-border/20">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Navigate through slides to learn about all AI Assistant features
                </p>
              </div>
              
              <Button
                variant="outline"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}