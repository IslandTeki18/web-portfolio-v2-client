type ContentBlock = {
  type: "paragraph" | "header" | "image" | "quote" | "list" | "code";
  content?: string;
  level?: number;
  src?: string;
  alt?: string; 
  items?: string[];
};

type BlogPost = {
  id: string;
  title: string;
  content: ContentBlock[];
  author: string;
  datePublished: Date;
  isPublic: boolean;
};

export { BlogPost, ContentBlock };