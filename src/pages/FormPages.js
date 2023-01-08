import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    fullName: yup.string().required(),
    email: yup.string().required(),
    nohp: yup.number().positive().integer().required(),
    hope: yup.string().required(),
}).required();


const FormPages = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => alert("Data pendaftar berhasil di terima....");

return (
    <div>
    <Container className="mt-5">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
        <label>Nama Lengkap</label>
        <input {...register("fullName")} className="form-control"/>
        {errors.fullName && <p className="alert alert-danger" role="alert">Nama Lengkap harus berupa huruf</p>}

        <label>Email</label>
        <input {...register("email")} className="form-control"/>
        {errors.email && <p className="alert alert-danger" role="alert">Email tidak Sesuai</p>}
    
        <label>Nomor Handphone</label>
        <input {...register("nohp")} className="form-control"/>
        {errors.email && <p className="alert alert-danger" role="alert">Nomor Handphone tidak Sesuai</p>}

        <div className="form-group">
        <label>Latar Belakang pendidikan</label>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="pendidikan" id="inlineRadio1" value="IT"/>
        <label className="form-check-label">IT</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="pendidikan" id="inlineRadio2" value="NON IT"/>
        <label className="form-check-label">NON IT</label>
        </div>
        </div>


        <label for="kelas">Kelas Coding Yang Dipilih : </label>
            <select className="form-control" id="kelas">
            <option>Pilih Salah Satu Program</option>
            <option>Coding Backend with Golang</option>
            <option>Coding Front End wuith React JS</option>
            <option>FullStack Developer</option>
            </select>

        <label>Photo Surat Kesungguhan</label>
        <input type={"file"} {...register("photo")} className="form-control"/>

        <label for="harapan">Harapan untuk Coding Bootcamp ini :</label>
        <textarea {...register("hope")} className="form-control" id="harapan" rows="3"></textarea>
        {errors.hope && <p className="alert alert-danger" role="alert">Wajib di isi</p>}

        <button type="submit" className="btn btn-primary m-1">Submit</button>
        <button type="reset" className=" btn btn-warning">Reset</button>

    </div>
        
    </form>
    </Container>
    </div>
);
};

export default FormPages;
