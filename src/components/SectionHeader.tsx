type Props = {
  titleWhite: string
  titleOrange: string ,
  paragraph: string
}

export default function SectionHeader({titleWhite , titleOrange , paragraph}:Props) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {titleWhite} <span className="text-orange-500">{titleOrange}</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
        {paragraph}
      </p>
    </div>
  )
}
