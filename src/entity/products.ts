import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    productImage: string;
    @Column({nullable: true})
    price: number
    @Column({nullable: true})
    rating: number
}