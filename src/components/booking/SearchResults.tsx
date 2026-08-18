import { format } from 'date-fns';
import { TrainCard } from './TrainCard';
import { mockTrains } from '../../data/mockData';
import { AlertCircle } from 'lucide-react';

interface SearchResultsProps {
  from: string;
  to: string;
  date: Date;
}

export function SearchResults({ from, to, date }: SearchResultsProps) {
  return (
    <div className="w-full mt-12 bg-white/50 rounded-3xl p-4 sm:p-8 border border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-brand-950 mb-2">
            Trains from {from.split(' (')[0]} to {to.split(' (')[0]}
          </h2>
          <p className="text-slate-600 flex items-center gap-2">
            {format(date, 'EEEE, dd MMMM yyyy')} • {mockTrains.length} trains found
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
          <AlertCircle className="h-4 w-4" />
          <span>Demo data only. Not connected to live systems.</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {mockTrains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
}
