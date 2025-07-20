import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileText, Sparkles, ThumbsUp, ThumbsDown, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  feedback?: "positive" | "negative";
}

interface TaskOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  prompts: string[];
}

const API_KEY = "AIzaSyAUtdOewFVMrp5iJ3hmpPQe_oS8vnB1Vio";
const genAI = new GoogleGenerativeAI(API_KEY);

const TASK_OPTIONS: TaskOption[] = [
  {
    id: "qa",
    title: "Question Answering",
    description: "Get factual answers to your questions",
    icon: MessageSquare,
    prompts: [
      "What is the capital of France?",
      "Can you explain why the Eiffel Tower is famous?",
      "List three interesting facts about Paris."
    ]
  },
  {
    id: "summarize",
    title: "Text Summarization", 
    description: "Summarize articles, documents, or long texts",
    icon: FileText,
    prompts: [
      "Summarize the following article: [paste article]",
      "What are the key points in this paragraph: [text]",
      "Give a short overview of this content: [text]"
    ]
  },
  {
    id: "creative",
    title: "Creative Writing",
    description: "Generate stories, poems, and creative content",
    icon: Sparkles,
    prompts: [
      "Write a fantasy story about a dragon and a princess.",
      "Compose a poem on the theme of autumn.",
      "Generate a sci-fi plot involving AI and time travel."
    ]
  }
];

export function AIAssistant() {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTaskSelect = (taskId: string) => {
    setSelectedTask(taskId);
    setMessages([]);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || !selectedTask) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await generateAIResponse(selectedTask, input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error generating AI response:", error);
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateAIResponse = async (taskId: string, userInput: string): Promise<string> => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const taskTypes = {
      qa: "Question Answering",
      summarize: "Text Summarization", 
      creative: "Creative Writing"
    };
    
    const prompt = `Task: ${taskTypes[taskId as keyof typeof taskTypes]}
User Input: ${userInput}
Instruction: Respond accordingly based on the task selected above.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  };

  const handleFeedback = (messageId: string, feedback: "positive" | "negative") => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, feedback } : msg
      )
    );
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your input helps us improve our responses.",
    });
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const selectedTaskData = TASK_OPTIONS.find(task => task.id === selectedTask);

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            AI Assistant
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose a task and let me help you with questions, summaries, or creative content
          </p>
        </div>

        {!selectedTask ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TASK_OPTIONS.map((task) => {
              const IconComponent = task.icon;
              return (
                <Card 
                  key={task.id}
                  className="p-6 cursor-pointer hover:shadow-ai transition-all duration-300 hover:scale-105 bg-gradient-surface border-0"
                  onClick={() => handleTaskSelect(task.id)}
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    <p className="text-muted-foreground">{task.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  {selectedTaskData && <selectedTaskData.icon className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{selectedTaskData?.title}</h2>
                  <p className="text-muted-foreground">{selectedTaskData?.description}</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => setSelectedTask(null)}>
                Change Task
              </Button>
            </div>

            {messages.length === 0 && selectedTaskData && (
              <Card className="p-6 mb-6 bg-gradient-surface border-0">
                <h3 className="text-lg font-semibold mb-4">Example prompts to get you started:</h3>
                <div className="space-y-2">
                  {selectedTaskData.prompts.map((prompt, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors p-2 text-sm"
                      onClick={() => handlePromptClick(prompt)}
                    >
                      {prompt}
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            <div className="space-y-4 mb-6 min-h-[300px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl shadow-surface ${
                      message.type === "user"
                        ? "bg-ai-user-bubble text-white"
                        : "bg-ai-assistant-bubble"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.type === "assistant" && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">Was this helpful?</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`h-6 w-6 p-0 ${
                            message.feedback === "positive" ? "text-green-600" : ""
                          }`}
                          onClick={() => handleFeedback(message.id, "positive")}
                        >
                          <ThumbsUp className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`h-6 w-6 p-0 ${
                            message.feedback === "negative" ? "text-red-600" : ""
                          }`}
                          onClick={() => handleFeedback(message.id, "negative")}
                        >
                          <ThumbsDown className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-ai-assistant-bubble p-4 rounded-2xl shadow-surface">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Card className="p-4 bg-gradient-surface border-0">
              <div className="flex gap-3">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Ask me anything about ${selectedTaskData?.title.toLowerCase()}...`}
                  className="flex-1 min-h-[60px] resize-none border-0 bg-background/50"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}