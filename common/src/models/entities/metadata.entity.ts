// import { UsuarioEntity } from "src/features/usuario/models/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { IdEntityAbstractClass } from "../classes/entity-abstract.class";

@Entity({ name: 'TBL_METADATA' })
export class MetadataEntity extends IdEntityAbstractClass  {

    // @OneToOne(type => UsuarioEntity)
    // @JoinColumn({name: '_owner'})
    // _owner: UsuarioEntity;

    // @OneToOne(type => UsuarioEntity)
    // @JoinColumn({name: '_createdBy'})
    // _createdBy: UsuarioEntity;

    // @Column({name: 'createdAt'})
    // createdAt: String;

    // @OneToOne(type => UsuarioEntity)
    // @JoinColumn({name: '_modifiedBy'})
    // _modifiedBy: UsuarioEntity;

    // @Column({name: 'modifiedAt'})
    // modifiedAt: String;


}
