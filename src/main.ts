import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  //////////////////////////   APARTADO 1   //////////////////////////

  const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
  };
  console.log("Pediatria: ", obtenPacientesAsignadosAPediatria(pacientes));

  const obtenPacientesAsignadosAPediatriaMenoresDe10 = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter(
      (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
    );
  };
  console.log(
    "Pediatria, menores de 10: ",
    obtenPacientesAsignadosAPediatriaMenoresDe10(pacientes)
  );
  //////////////////////////   APARTADO 2   //////////////////////////

  const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    return pacientes.some(
      (paciente) =>
        paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100
    );
  };
  console.log(
    "Protocolo de urgencia activado? ",
    activarProtocoloUrgencia(pacientes)
  );

  //////////////////////////   APARTADO 3   //////////////////////////

  const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.map((paciente) =>
      paciente.especialidad === "Pediatra"
        ? { ...paciente, especialidad: "Medico de familia" }
        : paciente
    );
  };
  console.log(
    "Pacientes con medicos reasignados: ",
    reasignaPacientesAMedicoFamilia(pacientes)
  );

  //////////////////////////   APARTADO 4   //////////////////////////

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
  };
  console.log(
    "Hay pacientes para pediatria: ",
    HayPacientesDePediatria(pacientes)
  );

  //////////////////////////   APARTADO 5   //////////////////////////

  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    let numeroPacientesPorEspeciadadlidad: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    };
    numeroPacientesPorEspeciadadlidad.medicoDeFamilia =
      calculaPacientesPorEspecialidad(pacientes, "Medico de familia");
    numeroPacientesPorEspeciadadlidad.pediatria =
      calculaPacientesPorEspecialidad(pacientes, "Pediatra");
    numeroPacientesPorEspeciadadlidad.cardiologia =
      calculaPacientesPorEspecialidad(pacientes, "Cardiólogo");
    return numeroPacientesPorEspeciadadlidad;
  };

  function calculaPacientesPorEspecialidad(
    pacientes: Pacientes[],
    espec: Especialidad
  ): number {
    return pacientes
      .filter((paciente) => paciente.especialidad === espec)
      .reduce((acc) => acc + 1, 0);
  }

  console.log(
    "Numero de pacientes por expecialidad: ",
    cuentaPacientesPorEspecialidad(pacientes)
  );
});
