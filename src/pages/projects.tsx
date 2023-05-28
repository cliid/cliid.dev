import ProjectCard from '@components/ProjectCard';
import Template from '@components/templates/Template';

export default function Projects() {
  return (
    <Template title="Projects" description="Fun stuff I've been doing.">
      <p className="tw-mb-4">Fun stuff I’ve been doing.</p>
      <div className="tw-flex tw-flex-col tw-gap-y-4">
        <ProjectCard
          title="dustackle"
          url="https://www.messenger.com/t/102129921278799"
          description="A Facebook chatbot that provides real-time information about fine dust levels and related
          statistics. Developed using TypeScript, Nest.js, Fastify, and Dialogflow."
        />
        <ProjectCard
          title="sevenwiki."
          url="https://seven.wiki"
          description="A tech wiki for Korean developers. Developed using Next.js and Nest.js."
        />
        <ProjectCard
          title="pryst"
          url="https://github.com/cliid/pryst"
          description="A statically and strongly typed programming language much alike to TypeScript, without the hassle of
          the JavaScript ecosystem. Developed using Java, GraalVM, and ANTLR4."
        />
        <ProjectCard
          title="rehype-twemojify"
          url="https://github.com/cliid/rehype-twemojify"
          description="An emoji-to-twemoji converter that runs on top of the unified ecosystem."
        />
        <ProjectCard
          title="smartquotes-ts"
          url="https://github.com/cliid/smartquotes-ts"
          description="TypeScript port of smartquotes.js."
        />
        <ProjectCard
          title="ASKY"
          url="https://github.com/cliid/ASKY-Unity"
          description="A virtual girlfriend developed using Unity/C#, Python Flask, and LUIS.ai. Can talk and play
some games with the user using natural language processing. Presented in front of other HYGEC
students."
        />
        <ProjectCard
          title="konne.ai"
          url="https://konne.ai"
          description="A word training platform powered by machine learning."
        />
      </div>
    </Template>
  );
}
