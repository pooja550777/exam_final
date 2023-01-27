package com.name.name.model;

@Data
@Entity
@Table(name="submit")
public class registrations {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Column(name="firstname")
    private String fname;
    @Column(name="middlename")
    private String mname;
    @Column(name="lastname")
    private String lname;
}

