import React, { useState, useEffect } from 'react';
import { AlertTriangle, Search, Check, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const people = [
  { name: "Amit Verma", upiId: "amit@oksbi" },
  { name: "Sneha Iyer", upiId: "sneha@icici" },
  { name: "Vikram Joshi", upiId: "vikram@upi" },
  { name: "Kajal Mehta", upiId: "kajal@ybl" },
  { name: "Rohan Desai", upiId: "rohan@paytm" },
  { name: "Anjali Rao", upiId: "anjali@oksbi" },
  { name: "Devansh Khurana", upiId: "devkh@okhdfcbank" },
  { name: "Pooja Shah", upiId: "pooja@upi" },
  { name: "Siddharth Bhat", upiId: "sid@icici" },
  { name: "Neha Kapoor", upiId: "nehak@paytm" },
  { name: "Rajeev Raina", upiId: "rajeev@okaxis" },
  { name: "Tanya Singh", upiId: "tanya@upi" },
  { name: "Gaurav Thakur", upiId: "gthakur@oksbi" },
  { name: "Jasmine Kaur", upiId: "jas@paytm" },
  { name: "Arjun Nair", upiId: "arjun@ybl" },
  { name: "Meera Krishnan", upiId: "meerak@okhdfcbank" },
  { name: "Tarun Chatterjee", upiId: "tarun@upi" },
  { name: "Nisha Agrawal", upiId: "nisha@icici" },
  { name: "Karthik Iyer", upiId: "karthik@ybl" },
  { name: "Tanvi Bansal", upiId: "tanvi@oksbi" },
  { name: "Zomato Payment", upiId: "zomato@upi" },
  { name: "Uber Auto", upiId: "uber@okaxis" },
  { name: "IRCTC Ticket", upiId: "irctc@ybl" },
  { name: "Flipkart Refund", upiId: "flipkart@paytm" },
  { name: "Swiggy Orders", upiId: "swiggy@upi" },
  { name: "Manish Tiwari", upiId: "manish@okaxis" },
{ name: "Deepika Singh", upiId: "deepika@upi" },
{ name: "Yusuf Pathan", upiId: "yusuf@ybl" },
{ name: "Sonal Chhabra", upiId: "sonalc@oksbi" },
{ name: "Harshit Malhotra", upiId: "harshit@paytm" },
{ name: "Ritika Jain", upiId: "ritikaj@okicici" },
{ name: "Naveen Reddy", upiId: "naveenr@upi" },
{ name: "Preeti Khosla", upiId: "preetik@okhdfcbank" },
{ name: "Aarav Chauhan", upiId: "aaravc@ybl" },
{ name: "Bhavna Joshi", upiId: "bhavna@oksbi" },
{ name: "Ola Rides", upiId: "ola@icici" },
{ name: "BigBasket Grocery", upiId: "bigbasket@ybl" },
{ name: "BookMyShow Tickets", upiId: "bookmyshow@upi" },
{ name: "Paytm Mall", upiId: "mall@paytm" },
{ name: "Air India", upiId: "airindia@okaxis" },
{ name: "Amazon India", upiId: "amazon@upi" },
{ name: "RedBus Travel", upiId: "redbus@oksbi" },
{ name: "Reliance Digital", upiId: "reliancedigital@upi" },
{ name: "UrbanClap Services", upiId: "urbanclap@okhdfcbank" },
{ name: "Jio Payments", upiId: "jio@icici" },
{ name: "Aarav Mehta", upiId: "aarav@upi" },
  { name: "Saanvi Kapoor", upiId: "saanvi@okhdfc" },
  { name: "Arjun Joshi", upiId: "arjun@pnb" },
  { name: "Neha Gupta", upiId: "neha@axis" },
  { name: "Rohan Agarwal", upiId: "rohan@hdfc" },
  { name: "Simran Singh", upiId: "simran@kotak" },
  { name: "Akash Verma", upiId: "akash@sbi" },
  { name: "Tanvi Deshmukh", upiId: "tanvi@icici" },
  { name: "Karan Reddy", upiId: "karan@bop" },
  { name: "Divya Sharma", upiId: "divya@bob" },

  // Added company names
  { name: "PayEase Solutions", upiId: "payease@paytm" },
  { name: "NexusPay Technologies", upiId: "nexus@hdfc" },
  { name: "TranSecure Innovations", upiId: "transec@axis" },
  { name: "FinBlock Systems", upiId: "finblock@pnb" },
  { name: "SwiftPay Enterprises", upiId: "swiftpay@sbi" },
  { name: "GlobalPay Tech", upiId: "globalpay@icici" },
  { name: "UPIMax Solutions", upiId: "upimax@bob" },
  { name: "PaySecure Technologies", upiId: "paysecure@kotak" },
  { name: "QuickTransfer Ltd.", upiId: "quicktrans@bop" },
  { name: "SafeTransaction Inc.", upiId: "safetrans@hdfc" },
  { name: "Reliance Industries", upiId: "reliance@jio" },
  { name: "Tata Consultancy Services", upiId: "tcs@hdfc" },
  { name: "Infosys Technologies", upiId: "infosys@sbi" },
  { name: "Hindustan Unilever", upiId: "hul@axis" },
  { name: "ICICI Bank", upiId: "icici@sbi" },
  { name: "Wipro Limited", upiId: "wipro@icici" },
  { name: "Adani Group", upiId: "adani@pnb" },
  { name: "Bharti Airtel", upiId: "airtel@axis" },
  { name: "Larsen & Toubro", upiId: "lt@kotak" },
  { name: "State Bank of India", upiId: "sbi@hdfc" },
  { name: "HDFC Bank", upiId: "hdfc@icici" },
  { name: "Axis Bank", upiId: "axis@icici" },
  { name: "Kotak Mahindra Bank", upiId: "kotak@pnb" },
  { name: "Maruti Suzuki India", upiId: "maruti@kotak" },
  { name: "Mahindra & Mahindra", upiId: "mahindra@bob" },
  { name: "Godrej Group", upiId: "godrej@hdfc" },
  { name: "ITC Limited", upiId: "itc@axis" },
  { name: "Bajaj Auto", upiId: "bajaj@pnb" },
  { name: "Dr. Reddy's Laboratories", upiId: "drreddy@icici" },
  { name: "HCL Technologies", upiId: "hcl@kotak" },
  { name: "Tata Motors", upiId: "tata@bob" },
  { name: "Biocon Limited", upiId: "biocon@axis" },
  { name: "Tech Mahindra", upiId: "techmahi@hdfc" },
  { name: "BHEL (Bharat Heavy Electricals)", upiId: "bhel@kotak" },
  { name: "Sun Pharmaceutical", upiId: "sunpharma@icici" },
  { name: "SBI Life Insurance", upiId: "sbilife@bob" },
  { name: "Titan Company", upiId: "titan@hdfc" },
  { name: "IndusInd Bank", upiId: "indusind@kotak" },
  { name: "Patanjali Ayurved", upiId: "patanjali@axis" },
  { name: "Zee Entertainment", upiId: "zee@pnb" },
  { name: "Power Grid Corporation", upiId: "powergrid@kotak" },
  { name: "NTPC Limited", upiId: "ntpc@hdfc" },
  { name: "Marico Limited", upiId: "marico@icici" },
  { name: "Hero MotoCorp", upiId: "hero@kotak" },
  { name: "Nestle India", upiId: "nestle@axis" },
  { name: "Punjab National Bank", upiId: "pnb@bob" },
  { name: "UltraTech Cement", upiId: "ultratech@kotak" },
  { name: "Asian Paints", upiId: "asianpaints@hdfc" },
  { name: "Shree Cement", upiId: "shreecement@icici" },
  { name: "Voltas Limited", upiId: "voltas@bob" },
  { name: "Eicher Motors", upiId: "eicher@kotak" },
  { name: "Indiabulls Housing Finance", upiId: "indiabulls@hdfc" },
  { name: "Grasim Industries", upiId: "grasim@pnb" },
  { name: "Motherson Sumi Systems", upiId: "motherson@kotak" },
  { name: "Sail (Steel Authority of India)", upiId: "sail@bob" },
  { name: "JK Tyre & Industries", upiId: "jktire@hdfc" },
  { name: "Bharat Petroleum Corporation", upiId: "bpcl@axis" },
  { name: "GAIL India", upiId: "gail@kotak" },
  { name: "Lupin Pharmaceuticals", upiId: "lupin@hdfc" },
  { name: "Wabco India", upiId: "wabco@icici" },
  { name: "Piramal Enterprises", upiId: "piramal@kotak" },
  { name: "Colgate-Palmolive India", upiId: "colgate@axis" },
  { name: "Aditya Birla Capital", upiId: "adityabirla@pnb" }

];

const generateRandomTransaction = () => {
  const person = people[Math.floor(Math.random() * people.length)];
  const amount = Math.floor(Math.random() * 25000) + 100;
  const statuses = ['safe', 'suspicious', 'pending'];
  const reasons = {
    suspicious: ['Unusual amount', 'Location mismatch', 'New receiver', 'Repeated rapid transfers'],
    pending: ['New device', 'Under manual review', 'KYC not verified'],
    safe: ['']
  };

  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const riskScore = Math.floor(Math.random() * 100);
  const reason = status === 'safe' ? '' : reasons[status][Math.floor(Math.random() * reasons[status].length)];

  return {
    id: Math.floor(Math.random() * 10000),
    name: person.name,
    upiId: person.upiId,
    amount,
    time: 'Just now',
    status,
    reason,
    riskScore,
  };
};

const TransactionMonitoring = () => {
  const [transactions, setTransactions] = useState(() => {
    const initial = Array.from({ length: 5 }, generateRandomTransaction);
    return initial;
  });

  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTx = generateRandomTransaction();
      setTransactions((prev) => [newTx, ...prev.slice(0, 50)]);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'suspicious':
        return <AlertTriangle className="h-5 w-5 text-cyber-danger" />;
      case 'safe':
        return <Check className="h-5 w-5 text-cyber-success" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-cyber-warning" />;
      default:
        return null;
    }
  };

  const getStatusColor = (score: number) => {
    if (score < 30) return 'bg-cyber-success';
    if (score < 60) return 'bg-cyber-warning';
    return 'bg-cyber-danger';
  };

  return (
    <Card className="cyber-panel h-full">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Real-Time Transaction Monitor</h2>
          <Button
  onClick={() => window.open('https://safer-india-darkwave-aritra.vercel.app/', '_blank')}
  variant="default"
  className="bg-purple-700 text-white hover:bg-purple-800"
>
  <Search className="mr-2 h-4 w-4" />
  Live Location
</Button>
        </div>

        <div className="space-y-3 overflow-y-auto max-h-[75vh] pr-2">
          {transactions.map((tx) => (
            <div
              key={tx.id + tx.time}
              className="bg-cyber-navy/60 rounded-md p-3 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyber-darker">
                  {getStatusIcon(tx.status)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{tx.name}</p>
                  <p className="text-xs text-gray-400">
                    {tx.upiId} • {tx.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">₹{tx.amount.toLocaleString()}</p>
                  {tx.reason && <p className="text-xs text-cyber-danger">{tx.reason}</p>}
                </div>

                <div className="w-16">
                  <div className="text-xs text-center mb-1 text-white">{tx.riskScore}%</div>
                  <Progress
                    value={tx.riskScore}
                    className={cn('h-1.5 bg-cyber-navy', getStatusColor(tx.riskScore))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TransactionMonitoring;
