import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity('actors')
export class Actor {
  @PrimaryGeneratedColumn()
  person_id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'date' })
  born: Date;

  @Column({ type: 'date', nullable: true })
  died: Date | null;

  // Define the many-to-many relationship with roles
  // @ManyToMany(() => Role, (role) => role.actors)
  // @JoinTable()
  // roles: Role[];
}

// @Entity('roles')
// export class Role {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'varchar', length: 255 })
//   name: string;

//   // Define the many-to-many relationship with actors
//   @ManyToMany(() => Actor, (actor) => actor.roles)
//   actors: Actor[];
// }
