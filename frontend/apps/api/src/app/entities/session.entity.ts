import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Place } from './place.entity';

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  checkinDate: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  checkoutDate: string;

  @ManyToOne('Place', 'sessions', { eager: true })
  place: Place;

  @ManyToOne('User', 'sessions', { eager: true })
  user: User;
}
