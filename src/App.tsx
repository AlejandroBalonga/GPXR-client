// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Title from "./components/Title";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Title from "./components/Title";
import { Accordion, Card, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />
      <Title title="GPXR" subTitle="XR de Propósito General">
        Proyectos de código abierto para la comunidad Maker que quiere
        participar de la creación de dispositivos relacionados con Realidad
        virtual, aumentada y mixta. donde se establecerá los requisitos y
        objetivos de cada proyecto, y finalmente el resultado y como conseguirlo
      </Title>
      <div className="container text-white">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Section img="logo GPXR barba.jpg" title="Proyectos">
                Cuando la ciencia ficción pasa de ideas a objetivo se deben
                plantear un proyecto con los pasos a seguir para llevarlo a cabo
                y volverlo realidad, y los que participen en el apartado Futuro
                pueden dar origen a nuevos proyectos
                <br />
                <br /> Cada Proyecto puede necesitar soluciones de Electrónica,
                Diseño, Óptica, virtual teniendo en cuenta las capacidades de
                Fabricación
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR ideas 1.jpg" />
                  <Card.Body>
                    <Card.Title>Nuevos</Card.Title>
                    <Card.Text>
                      Proyectos nuevos a la espera de ser iniciados
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR maquinas 1.jpg" />
                  <Card.Body>
                    <Card.Title>En desarrollo</Card.Title>
                    <Card.Text>Proyectos empezados por la comunidad</Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR CiFi 1.jpg" />
                  <Card.Body>
                    <Card.Title>Finalizados</Card.Title>
                    <Card.Text>
                      Proyectos listos para encargar, hacer y usar
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Section
                img="imagen GPXR electronica 2.jpg"
                title="Electronica"
                imgRight
              >
                Vital para cada dispositivo, cada proyecto presenta requisitos
                que la electrónica debe cumplir <br />
                <br />
                En este apartado se podrá encontrar los proyectos y sus
                requisitos en electrónica, los módulos y soluciones
                desarrollados y recomendados por la comunidad, y los proveedores
                recomendados
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR proyectos 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Proyectos</Card.Title>
                    <Card.Text>
                      Una lista de oportunidades para aportar soluciones
                      electrónicas
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR modulos 1.jpg" />
                  <Card.Body>
                    <Card.Title>Modulos</Card.Title>
                    <Card.Text>
                      Catalogo de electrónica de terceros, sus usos y proyectos
                      donde se usan
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR proveedores 3.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Proveedores</Card.Title>
                    <Card.Text>
                      Ranking de los mejores fabricantes de electrónica y
                      vendedores de módulos
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Section img="imagen GPXR partes 1.jpg" title="Diseños">
                Desde la apariencia, la estructura y la mecánica, cada proyecto
                puede tener un estilo único, requisitos y funcionalidades que
                debe modelarse para que cualquiera lo pueda fabricar <br />
                <br />
                En este apartado se podrán encontrar los distintos modelos y
                estilos que puede tener los dispositivos, soluciones
                estructurales y recomendaciones de mecanismos
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR modelos 1.jpg" />
                  <Card.Body>
                    <Card.Title>Modelos y estilos</Card.Title>
                    <Card.Text>
                      Un catalogo de modelos y las apariencias de cada diseño
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR estructuras 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Estructuras</Card.Title>
                    <Card.Text>
                      Una lista de soluciones y métodos para unir las partes
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR mecanismos 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Mecanismos</Card.Title>
                    <Card.Text>
                      Una galería de mecanismos usados y otros inspiradores
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Section img="imagen GPXR optica 1.jpg" title="Óptica" imgRight>
                Este es un aspecto intrínseco para XR, el diseño de los lentes
                para cada proyecto tiene requisitos que cumplir y luego estos
                diseños tienen que ser fabricables. <br />
                <br />
                En este apartado se podrán encontrara los distintos métodos de
                fabricación y los proyectos pendientes de diseños ópticos
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR proyectos lentes 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Proyectos</Card.Title>
                    <Card.Text>
                      Una lista de oportunidades para aportar diseños de lentes
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR diseños lentes 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Diseños</Card.Title>
                    <Card.Text>
                      Galería de los diseños aportados por la comunidad y sus
                      ventajas
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR fabicacion lentes 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Fabricación</Card.Title>
                    <Card.Text>
                      Lista de métodos de diseño y fabricación, vendedores y
                      fabricantes
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <Section img="imagen GPXR virtual 1.jpg" title="Virtual">
                Mas del 90% de las soluciones son virtuales, es por esto que la
                mayoría de la comunidad aporta de forma virtual con programas y
                código como solución a cada problema <br />
                <br />
                En este apartado se podrá encontrar los proyectos que requieren
                soluciones virtuales
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR proyectos 2.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Proyectos</Card.Title>
                    <Card.Text>
                      Una lista de oportunidades para aportar soluciones
                      virtuales
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR documentacion 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Documentación</Card.Title>
                    <Card.Text>
                      Desde información y ejemplos a tutoriales para su
                      implementación
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR descargas 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Descargas</Card.Title>
                    <Card.Text>
                      Repositorios, archivos y programas necesario para
                      proyectos y tutoriales
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <Section
                img="imagen GPXR fabrica 1.jpg"
                title="Fabricación"
                imgRight
              >
                Las impresoras 3D se convirtieron en las maquinas mas usadas por
                la comunidad Maker pero no son la únicas <br />
                <br />
                En este apartado se encontrara las maquinas usadas, recomendadas
                y creadas para fabricar estos proyectos, y proveedores de
                fabricación
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR maquinas 1.jpg" />
                  <Card.Body>
                    <Card.Title>Maquinas</Card.Title>
                    <Card.Text>
                      Ranking de las mas usadas, donde conseguirlas o como
                      hacerlas
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR programas 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Programas</Card.Title>
                    <Card.Text>
                      Lista de los programas recomendados y usados para el
                      diseño de partes
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR proveedores 2.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Proveedores</Card.Title>
                    <Card.Text>
                      Catalogo de fabricantes y Makers que se ofrecen a fabricar
                      las partes y proyectos
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <Section img="imagen GPXR futuro 1.jpg" title="Futuro">
                La ciencia ficción se vuelve realidad pero esto no seria posible
                sin las ideas futuristas <br />
                <br />
                En este apartado se podrán encontrar esas ideas que se pueden
                volver realidad si se resuelven todos los problemas que
                presentan
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR objetivos 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Objetivos</Card.Title>
                    <Card.Text>
                      Cuando una idea se vuelve posible se convierte en objetivo
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR ideas 1.jpg" />
                  <Card.Body>
                    <Card.Title>Ideas</Card.Title>
                    <Card.Text>
                      Cuando la ficción puede hacerse realidad si se encuentran
                      las soluciones para cada idea
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR CiFi 1.jpg" />
                  <Card.Body>
                    <Card.Title>Ciencia ficción</Card.Title>
                    <Card.Text>
                      Cualquiera puede imaginar el futuro y proponer nuevas
                      ideas
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <Section
                img="imagen GPXR patreons 1.jpg"
                title="Patrocinadores"
                imgRight
              >
                El financiamiento de este proyecto será reconocido con su
                mención y agradecimiento para cada particular y con su
                recomendación a los proveedores y fabricantes <br />
                <br />
                En este apartado podrán encontrar como ser patrocinador y los
                beneficios de serlo <br />
                <br />
                PCBWay fuel el primer patrocinador ofreciéndose a fabricar los
                prototipos
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR patreons 2.jpg" />
                  <Card.Body>
                    <Card.Title>Patreons</Card.Title>
                    <Card.Text>
                      Desde ya gracias, sin ustedes estos proyectos no se
                      volverían realidad
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR beneficios 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Beneficios</Card.Title>
                    <Card.Text>
                      Descuentos, regalos, invitaciones y mas recompensas para
                      patrocinadores y Makers
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR recomendados 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Recomendados</Card.Title>
                    <Card.Text>
                      Lista recomendad de proveedores y fabricantes que aportan
                      al proyecto
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <Section img="imagen GPXR maker 1.jpg" title="Makers">
                Así como los patrocinadores, los Makers que mas aporten
                soluciones serán mencionados y agradecidos en redes sociales, y
                mencionados como ejemplo a seguir para crear soluciones <br />
                <br />
                En este apartado se podrán encontrar a los Top Makers, sus
                aportes y los beneficios de serlo
              </Section>
            </Accordion.Header>
            <Accordion.Body>
              <Row md={3}>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR top makers 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Top makers</Card.Title>
                    <Card.Text>
                      Ranking de Makers que mas trabajaron y fueron mas
                      valorados en proyectos
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img className="mt-2" src="imagen GPXR aportes 1.jpg" />
                  <Card.Body>
                    <Card.Title>Aportes</Card.Title>
                    <Card.Text>
                      Lista de soluciones mas usadas y recomendadas como ejemplo
                      a seguir
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="mt-2"
                    src="imagen GPXR beneficios 1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Beneficios</Card.Title>
                    <Card.Text>
                      Descuentos, regalos, invitaciones y mas recompensas para
                      patrocinadores y Makers
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </>
  );
}

export default App;
