import styles from './reservations.module.css'
import ReservationMenu from '@/components/ReservationMenu';

export default function ReservationsLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className={styles.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div>
    );
}