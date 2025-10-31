import { SectionHeader, AnimatedSection } from "@/components/molecules";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { BlogCard } from "@/components/organisms/blog-card";
import { FADE_IN_UP, FADE_IN_DELAYED } from "@/constants/animations";
import { BLOG_POSTS } from "@/constants/content";

export const BlogSection = () => {
  return (
    <SectionContainer id="blog">
      <SectionContent>
        <AnimatedSection animation={FADE_IN_UP}>
          <SectionHeader
            badge="Blog"
            title="Latest insights and guides"
            description="Practical articles on business growth, international expansion, and market strategies."
            alignment="left"
          />
        </AnimatedSection>
        <AnimatedSection
          animation={FADE_IN_DELAYED}
          className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6"
        >
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              author={post.author}
              readTime={post.readTime}
              title={post.title}
              tags={post.tags}
              date={post.date}
              featured={post.featured}
            />
          ))}
        </AnimatedSection>
      </SectionContent>
    </SectionContainer>
  );
}
