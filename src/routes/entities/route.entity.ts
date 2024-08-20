import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'route' })
export class RouteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user', nullable: false })
    user: number;

    @Column({ name: 'location', nullable: false })
    location: string;
   
    @Column({ name: 'priceNormal', default: 0.0 })
    priceNormal: Number;
   
    @Column({ name: 'priceExecutive', default: 0.0 })
    priceExecutive: Number;
}