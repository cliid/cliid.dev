import NotesCard from '@components/NotesCard';
import Template from '@components/templates/Template';

export default function Notes() {
  return (
    <Template
      title="Notes"
      description="A collection of files, mainly lecture notes, with presentation files for the talks I’ve given."
    >
      <p className="tw-mb-4">
        A collection of files, mainly lecture notes, with presentation files for the talks I’ve
        given.
      </p>
      <div className="tw-flex tw-flex-col tw-pb-8 tw-gap-y-4">
        <NotesCard
          title="A Gentle Introduction to Arithmetic Dynamics"
          url="/static/files/gentle-intro-to-arithmetic-dynamics.pdf"
          description="We provide an introduction to the field of arithmetic dynamics. We start by defining fundamental terminology and notation from classical dynamics, including periodic points, wandering points, rational maps, power maps, Chebyshev polynomials, and Lattès maps. Together, we cover basic machinery from algebraic geometry, number theory, and p-adic analysis, including affine and projective space, ideals and varieties, and completions of Q. Continuing the discussion, we discuss dynamics over global fields, ultimately leading to the proof of Northcott’s theorem, involving Hilbert’s Nullstellensatz. We then discuss pathways emerging from it, centered around the uniform boundedness conjecture."
        />
        <NotesCard
          title="Asymptotic Arguments — A powerful technique using complexity and density"
          url="/static/files/asymptotic-arguments.pdf"
          description="These slides were part of a lecture I delivered to my ‘family’ at Ross, which covered topics on asymptotic analysis, including natural density, union bound, and Szemerédi's theorem."
        />
        <NotesCard
          title="The multifarious Cantor set"
          url="/static/files/cantor.pdf"
          description="This is a series of notes I’ve taken while attending lectures on Cantor sets, given by Prof. Vitaly Bergelson (OSU). My LaTeX’ed notes were used by Prof. Bergelson and Prof. Shapiro as a basis for the compilation of the final lecture notes."
        />
        <NotesCard
          title="Graph theory"
          url="/static/files/graph-theory.pdf"
          description="This is a series of notes I’ve taken while attending lectures on Graph Theory (Extremal Graph Theory, Ramsey Theory, and Spectral Graph Theory), given by Prof. Matthew Stone (OSU)."
        />
        <NotesCard
          title="Modal logic"
          url="/static/files/modal-logic.pdf"
          description="This is a series of notes I’ve taken while attending lectures on Modal Logic, given by Pico Gilman (UCSB)."
        />
        <NotesCard
          title="Hypergeometric functions"
          url="/static/files/hypergeometric-fn.pdf"
          description="This is a series of notes I’ve taken while attending lectures on Hypergeometric Functions, given by Brian Grove (LSU)."
        />
        <NotesCard
          title="Class field theory"
          url="/static/files/class-field-theory.pdf"
          description="This is a series of notes I’ve taken while attending lectures on Class Field Theory, given by Bartu Bingol (UMass Amherst)."
        />
        <NotesCard
          title="Analysis & Topology"
          url="/static/files/analysis.pdf"
          description="This is a series of notes I’ve taken while attending lectures on Real Analysis and Point-Set Topology, given by Xinkai Wu (Columbia) and Pico Gilman (UCSB)."
        />
        <NotesCard
          title="Algebra"
          url="/static/files/algebra.pdf"
          description="This is a series of notes I’ve taken while attending lectures on Abstract Algebra, given by Mustafa Nawaz (UIC)."
        />
        <NotesCard
          title="Suslin things"
          url="/static/files/2nd-most.pdf"
          description="This is a series of notes I’ve taken while attending lectures on the ‘back and forth’ argument, given by Pico Gilman (UCSB)."
        />
        <NotesCard
          title="Banach and Hilbert spaces"
          url="/static/files/banach-hilbert.pdf"
          description="This was a presentation I had given for my linear algebra class."
        />
        <NotesCard
          title="Stokes' theorem with JCT"
          url="/static/files/stokes.pdf"
          description="This was a presentation I had given for my vector calculus class."
        />
      </div>
    </Template>
  );
}
