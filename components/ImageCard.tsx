import Image from "next/image";

export type ImageCardData = {
  src: string;
  alt: string;
  category: string;
  title: string;
  meta?: string;
};

export default function ImageCard({ src, alt, category, title, meta }: ImageCardData) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink/5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-widest2 text-ink/50">
          {category}
        </span>
        {meta && (
          <span className="text-[10px] font-medium uppercase tracking-widest2 text-ink/30">
            {meta}
          </span>
        )}
      </figcaption>
      <p className="mt-1 font-display text-base italic text-ink/80">{title}</p>
    </figure>
  );
}
