export default function SidebarFilter({ filters, selected, onChange }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Filtrar por categoria</h2>
      <ul className="space-y-2">
        {filters.map((filter) => (
          <li key={filter}>
            <label className="inline-flex items-start space-x-2">
              <input
                type="checkbox"
                checked={selected.includes(filter)}
                onChange={() => onChange(filter)}
                className="mt-1"
              />
              <span className="text-sm">{filter}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
