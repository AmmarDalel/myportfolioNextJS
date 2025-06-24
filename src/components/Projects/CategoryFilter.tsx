import { Button } from "@/components/ui/button"

type Props = {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onSelect(category)}
          variant={selected === category ? "default" : "outline"}
          className={`${
            selected === category
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          } transition-all duration-200`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
