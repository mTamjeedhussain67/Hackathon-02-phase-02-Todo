import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/components/ui';
import { TaskProvider } from '@/lib/context/TaskContext';
import { AuthProvider } from '@/lib/context/AuthContext';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "M. Tamjeed's Task System",
  description: 'Premium Phase II Full-Stack Web Todo Application by Muhammad Tamjeed Hussain',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <TaskProvider>
            <ToastProvider>
              <div className="min-h-screen flex flex-col">
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </ToastProvider>
          </TaskProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
