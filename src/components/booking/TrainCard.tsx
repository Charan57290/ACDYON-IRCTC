import { Clock, Train } from 'lucide-react';
import { cn } from '../../lib/utils';
import { type TrainResult } from '../../data/mockData';

export function TrainCard({ train }: { train: TrainResult }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-premium transition-all duration-300">
      <div className="p-4 sm:p-5 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 gap-4">
        {/* Train Info */}
        <div className="flex items-start gap-4 w-full md:w-1/3">
          <div className="bg-brand-50 p-3 rounded-full hidden sm:block">
            <Train className="h-6 w-6 text-brand-600" />
          </div>
          <div>
            <h3 className="font-bold text-brand-950 text-lg">{train.trainName}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 mt-1">
              # {train.trainNumber}
            </span>
          </div>
        </div>

        {/* Time Info */}
        <div className="flex items-center justify-between w-full md:w-auto md:flex-1 md:justify-center gap-6">
          <div className="text-left md:text-right">
            <div className="text-2xl font-bold text-brand-950">{train.departureTime}</div>
            <div className="text-sm text-slate-500">{train.from.split(' (')[0]}</div>
          </div>
          
          <div className="flex flex-col items-center px-4 w-32 relative">
            <div className="text-xs font-semibold text-slate-400 mb-1 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {train.duration}
            </div>
            <div className="w-full flex items-center">
              <div className="h-2 w-2 rounded-full bg-slate-300"></div>
              <div className="flex-1 h-[1px] bg-slate-300 border-t border-dashed border-slate-300"></div>
              <div className="h-2 w-2 rounded-full bg-brand-500"></div>
            </div>
          </div>

          <div className="text-right md:text-left">
            <div className="text-2xl font-bold text-brand-950">{train.arrivalTime}</div>
            <div className="text-sm text-slate-500">{train.to.split(' (')[0]}</div>
          </div>
        </div>
      </div>

      {/* Availability Classes */}
      <div className="bg-slate-50 p-4 sm:p-5">
        <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 sm:pb-0 hide-scrollbar">
          {train.availability.map((cls, idx) => (
            <div 
              key={idx}
              className={cn(
                "flex-shrink-0 w-36 p-3 rounded-xl border bg-white cursor-pointer transition-all hover:border-brand-400 hover:shadow-md",
                cls.status === 'AVAILABLE' ? 'border-green-200' :
                cls.status === 'WL' ? 'border-orange-200' :
                cls.status === 'RAC' ? 'border-yellow-200' : 'border-slate-200 opacity-60'
              )}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-brand-900">{cls.class}</span>
                <span className="text-sm font-semibold text-brand-700">₹{cls.price}</span>
              </div>
              <div className={cn(
                "text-sm font-medium",
                cls.status === 'AVAILABLE' ? 'text-green-600' :
                cls.status === 'WL' ? 'text-orange-600' :
                cls.status === 'RAC' ? 'text-yellow-600' : 'text-slate-400'
              )}>
                {cls.status === 'AVAILABLE' ? `AVL - ${cls.seats}` :
                 cls.status === 'WL' ? `WL - ${cls.seats}` :
                 cls.status === 'RAC' ? `RAC - ${cls.seats}` : 'NOT AVL'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
